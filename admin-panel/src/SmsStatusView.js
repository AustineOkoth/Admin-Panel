import React from "react"

export default function SmsStatusView() {
  const [backendData, setBackendData] = React.useState({})
  React.useEffect(() => {
    fetch("/statusview").then(response => response.json())
    .then((data) => {
      setBackendData(data)
    }
    )
  }, [])
  
  function showStatusViewDataProgressEnter() {
    let dataProgress = document.getElementById("dataProgressSentToday")
    dataProgress.innerHTML = `${backendData[0]}/1000`

  }
  function showStatusViewDataProgressEnter2() {
    let dataProgress = document.getElementById("dataProgressDeliveredToday")
    dataProgress.innerHTML = `${Math.floor(`${backendData[1]}` / 100 * `${backendData[0]}`)}`
  }
  function showStatusViewDataProgressEnter3() {
    let dataProgress = document.getElementById("dataProgressSentYesterday")
    dataProgress.innerHTML = `${backendData[2]}/1000`

  }
  function showStatusViewDataProgressEnter4() {
    let dataProgress = document.getElementById("dataProgressDeliveredYesterday")
    dataProgress.innerHTML = `${Math.floor(`${backendData[3]}` / 100 * `${backendData[2]}`)}`

  }
  function showStatusViewDataProgressLeave() {
    let dataProgress = document.getElementById("dataProgressSentToday")
    let dataProgress2 = document.getElementById("dataProgressDeliveredToday")
    let dataProgress3 = document.getElementById("dataProgressSentYesterday")
    let dataProgress4 = document.getElementById("dataProgressDeliveredYesterday")
    dataProgress.innerHTML = ``;
    dataProgress2.innerHTML = ``;
    dataProgress3.innerHTML = ``;
    dataProgress4.innerHTML = ``;

  }



  return (
    <div className="statusView-container">
      <div className="statusView-components">
        <div className="sms-sent-today">
          <div className="s-s-t-num-icon" style={{ display: "flex", flexDirection: "row" }}>
            <big style={{ margin: "auto", marginLeft: "10px", fontSize: "25px", fontWeight: "bold", color: "green" }}>{backendData[0]}</big>
            <i style={{ margin: "auto", marginRight: "10px" }} class="bi bi-envelope"></i>
          </div>
          <small className="s-s-t-header" style={{ marginLeft: "10px" }}><b>SMS SENT TODAY</b></small>
          <div className="s-s-t-scale">
            <input className="custom-range" type="range" min="0" max="1000" value={backendData[0]} onMouseEnter={showStatusViewDataProgressEnter} onMouseLeave={showStatusViewDataProgressLeave} />
            <span><small id="dataProgressSentToday"></small></span>
          </div>
        </div>

        <div className="sms-delivered-today">

          <div className="s-d-t-num-icon" style={{ display: "flex", flexDirection: "row" }}>
            <big style={{ margin: "auto", marginLeft: "10px", fontSize: "25px", fontWeight: "bold", color: "purple" }}>{backendData[1]}%</big>
            <i style={{ margin: "auto", marginRight: "10px" }} class="bi bi-globe"></i>
          </div>
          <small className="s-d-t-header" style={{ marginLeft: "10px" }}><b>DELIVERED TODAY</b></small>

          <div className="s-d-t-scale">
            <input className="custom-range" type="range" min="0" max="100" value={backendData[1]} style={{ backgroundColor: "whitesmoke" }} onMouseEnter={showStatusViewDataProgressEnter2} onMouseLeave={showStatusViewDataProgressLeave} />
            <span><small id="dataProgressDeliveredToday"></small></span>
          </div>

        </div>

        <div className="sms-sent-yesterday">

          <div className="s-s-y-num-icon" style={{ display: "flex", flexDirection: "row" }}>
            <big style={{ margin: "auto", marginLeft: "10px", fontSize: "25px", fontWeight: "bold", color: "red" }}>{backendData[2]}</big>
            <i style={{ margin: "auto", marginRight: "10px" }} class="bi bi-globe"></i>
          </div>
          <small className="s-s-y-header" style={{ marginLeft: "10px" }}><b>SMS SENT YESTERDAY</b></small>

          <div className="s-s-y-scale">
            <input className="custom-range" type="range" min="0" max="1000" value={backendData[2]} style={{ backgroundColor: "red" }} onMouseEnter={showStatusViewDataProgressEnter3} onMouseLeave={showStatusViewDataProgressLeave} />
            <span><small id="dataProgressSentYesterday"></small></span>
          </div>

        </div>

        <div className="sms-delivered-yesterday">

          <div className="s-d-y-num-icon" style={{ display: "flex", flexDirection: "row" }}>
            <big style={{ margin: "auto", marginLeft: "10px", fontSize: "25px", fontWeight: "bold", color: "green" }}>{backendData[3]}%</big>
            <i style={{ margin: "auto", marginRight: "10px" }} class="bi bi-globe"></i>
          </div>
          <small className="s-d-y-header" style={{ marginLeft: "10px" }}><b>DELIVERED YESTERDAY</b></small>

          <div className="s-d-y-scale">
            <input className="custom-range" type="range" min="0" max="100" value={backendData[3]} style={{ backgroundColor: "whitesmoke" }} onMouseEnter={showStatusViewDataProgressEnter4} onMouseLeave={showStatusViewDataProgressLeave} />
            <span><small id="dataProgressDeliveredYesterday"></small></span>
          </div>
        </div>

      </div>
    </div>
  )
}
