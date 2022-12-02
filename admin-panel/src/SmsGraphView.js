import React from "react"
import Chart from 'chart.js/auto'

export default function SmsGraphView() {
    const [statusGraphBackendData, setStatusGraphBackendData] = React.useState({})
    React.useEffect(() => {
      fetch("/statusgraph").then(response => response.json())
        .then((data) => {
          setStatusGraphBackendData(data)
           }
        )
    }, [])

    function MyGraph() {
        const dataDate = new Date();
        let year = dataDate.getFullYear();
        let month = dataDate.getMonth() + 1;
        let day = dataDate.getUTCDate()

        React.useEffect(() => {
            const data = {
                labels: [`${day}/${month}/${year}`, `${day - 1}/${month}/${year}`, `${day - 2}/${month}/${year}`],
                datasets: [{
                    label: 'Delivered',
                    backgroundColor: "black",
                    data: [10, 20, 30],
                },
                {
                    label: 'Submitted',
                    backgroundColor: "skyblue",
                    data: [7,8, 40,],
                },
                {
                    label: 'Rejected',
                    backgroundColor: "red",
                    data: [12,13, 24,],
                },
                {
                    label: 'Undelivered',
                    backgroundColor: "purple",
                    data: [17, 10, 19,],
                },
                {
                    label: 'DND',
                    backgroundColor: "yellow",
                    data: [22, 23, 38],
                },
                {
                    label: 'Others',
                    backgroundColor: "grey",
                    data: [2, 28, 29],
                }
                ]
            };
            //graph configuration
            const config = {
                type: 'bar',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "right"
                        }
                    },
                    scales: {
                        y: {
                            grid: { display: true, borderWidth: "0px", borderColor: "red" },
                            ticks: { display: false },
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            };
            new Chart(
                document.getElementById('graph').getContext('2d'),
                config
            );
        });

        return (
            <div className="graph-canvas">
                <canvas id="graph"></canvas>
            </div>
        );
    }

    return (
        <div className="graph-container">
            <div className="graph-header-graph-variables">
                <p className="graph-header"><b>Traffic summary of last Three days</b></p>
                <div className="graph-variables">
                    <p className="graph-data" id="graph-total-sent"><b><a href="www.google.com">Total Sent {statusGraphBackendData[0]}</a> </b> | <hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                    <p className="graph-data" id="graph-delivered"><b><a href="www.google.com">Delivered</a></b> {statusGraphBackendData[1]} ({Math.ceil((statusGraphBackendData[1]/statusGraphBackendData[0])*100)}%) | <hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                    <p className="graph-data" id="graph-submitted"><b><a href="www.google.com">Submitted</a></b> {statusGraphBackendData[2]} ({Math.ceil((statusGraphBackendData[2]/statusGraphBackendData[0])*100)}%) | <hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                    <p className="graph-data" id="graph-rejected"><b><a href="www.google.com">Rejected</a></b> {statusGraphBackendData[3]} ({Math.ceil((statusGraphBackendData[3]/statusGraphBackendData[0])*100)}%) | <hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                    <p className="graph-data" id="graph-undelivered"><b><a href="www.google.com">Undelivered</a></b> {statusGraphBackendData[4]} ({Math.ceil((statusGraphBackendData[4]/statusGraphBackendData[0])*100)}%) |<hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                    <p className="graph-data" id="grapg-dnd"><b><a href="www.google.com">DND</a></b> {statusGraphBackendData[5]} ({Math.ceil((statusGraphBackendData[5]/statusGraphBackendData[0])*100)}%) | <hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                    <p className="graph-data" id="graph-other"><b><a href="www.google.com">Other</a></b> {statusGraphBackendData[6]} ({Math.ceil((statusGraphBackendData[6]/statusGraphBackendData[0])*100)}%) <hr style={{ backgroundColor: "green", height: "2px" }} /></p>
                </div>
                <p className="message-details"><b>Sent Messages Details</b></p>
            </div>
            < MyGraph  />
        </div>

    )
}
