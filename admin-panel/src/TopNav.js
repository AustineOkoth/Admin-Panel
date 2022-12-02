import React from "react"
import DropDownUser from './DropDownUser'

export default function TopNav() {
  const [dropBtnState, setDropBtnState] = React.useState(false);
  function topNavDropDown() {
    setDropBtnState(dropBtnState => !dropBtnState);
  }
  let toggleDropDownActive = dropBtnState ? "active" : "inactive";

  function toggleDropDownListener() {
    let dropDownUserContainer = document.getElementsByClassName(`DropDownUser-container-active`)
    let spanPersonDropDown = document.getElementsByClassName(`person-drop`);
    window.addEventListener("click", (event) => {
      if (dropDownUserContainer[0] !== undefined) {
        let v4 = dropDownUserContainer[0].contains(event.target)
        if (v4 === false) {
          let v5 = spanPersonDropDown[0].contains(event.target)
          if (v5 === false) {
            dropDownUserContainer[0].className = `DropDownUser-container-inactive`;
            setDropBtnState(dropBtnState => !dropBtnState)
          }
        }
      }
    })
  }
  toggleDropDownListener()

  return (
    <div className="top-nav-container" >
      <div className="top-nav-bar">
        <div className="company-header">
          <h3 style={{ fontWeight: "5", fontFamily: "sans-serif" }}>Onion Media LTD</h3>
        </div>
        < div className="header-icons-container">
          <div className="header-icons">
            <button className="top-nav-links"><i class="bi bi-question-circle"></i></button>
            <button className="top-nav-links"><i class="bi bi-calendar2"></i></button>
            <button className="top-nav-links"><i class="bi bi-bell"></i></button>
            <span className="person-drop"><button className="top-nav-links" onClick={topNavDropDown}><i class="bi bi-person"></i><i class="bi bi-chevron-down" style={{ marginLeft: "3px" }}></i></button></span>
          </div>
        </div>
      </div>
      <div className="top-nav-status">

        <div className="top-dashboard">
          <a href="http://localhost:3000/" className="dash-sms-develop-links">
            <div className="top-dashboard-icon">
              <i className="bi bi-graph-up" style={{ color: "white" }}></i>
            </div>
            <h5 style={{ textAlign: "center", fontSize: "x-small", paddingLeft: "5px", paddingRight: "5px" }}>DASHBOARD</h5>
          </a>
        </div>

        <div className="top-sms">
          <a href="www.google.com" className="dash-sms-develop-links">
            <div className="top-sms-icon">
              <i class="bi bi-envelope" style={{ color: "white" }}></i>
            </div>
            <h5 style={{ textAlign: "center", fontSize: "x-small", paddingLeft: "5px", paddingRight: "5px" }}>SEND SMS</h5>
          </a>
        </div>

        <div className="top-developer">
          <a href="www.google.com" className="dash-sms-develop-links">
            <div className="top-developer-icon">
              <i className="bi bi-file-earmark-code-fill" style={{ color: "white" }}></i>
            </div>
            <h5 style={{ textAlign: "center", fontSize: "x-small", paddingLeft: "5px", paddingRight: "5px" }}>DEVELOPER API</h5>
          </a>
        </div>
        {/* HERE GOES THE DROP DOWN ARROW FUNCTIONS */}
        < div className={`drop-down-user-container-${toggleDropDownActive}`}>
          <DropDownUser value={toggleDropDownActive} style={{ fontSize: "small" }} />
        </div>
      </div>
    </div>
  )
}