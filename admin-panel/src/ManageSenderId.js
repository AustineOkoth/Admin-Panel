import React from "react";


export default function () {
    const containerStyles = {
        backgroundColor: "white",
        height: "min-content",
        marginLeft : "10px",
        fontSize : "small"

    }
    const tableHeaderStyles = {
        backgroundColor: "white",
        padding: "10px",
        border: "0px solid whitesmoke",
        borderLeft: "0px",
        fontFamily: "sans-serif"

    }
    const tableRowStyles = {
        backgroundColor: " pink"
    }
    const tableDataStyles = {
        paddingLeft: "5px",
        marginLeft : "10px",
        borderLeft: "1px solid whitesmoke",
        borderTop: "1px solid whitesmoke",
        backgroundColor: "white"
    }
    const entriesSearchStyles = {
        display: "flex",
        flexDirection: "row",
        padding: "10px"
    }

    return (
        <div className="manageSenderId-container-all">
            <h4 style={{ fontFamily: "sans-serif", marginLeft : "10px" }}>Manage SenderID</h4>
            <div className="manageSenderId-container" style={containerStyles}>
                <div className="addButton">
                    <button style={{ padding: "10px", margin: "10px", backgroundColor: "seagreen", color: "white", border: "0px" }}>Add Sender</button>
                </div>
                <div className="entries-search" style={entriesSearchStyles}>
                    <div className="entries"><b style={{marginRight : "5px"}}>Show</b>
                        <select style={{ width: "50px", padding: "5px" }}>
                            <option>10</option>
                            <option>5</option>
                            <option>3</option>
                        </select> <b>entries</b>

                    </div>
                    <div className="search" style={{ margin: "auto" }}><b>Search: </b>< input type="search" /></div>
                </div>
                <table style={{marginLeft : "10px"}}>
                    <tr style={tableRowStyles}>
                        <th style={tableHeaderStyles}><b>Create Date</b></th>
                        <th style={tableHeaderStyles}><b>Sender Id</b></th>
                        <th style={tableHeaderStyles}><b>Purpose</b></th>
                        <th style={tableHeaderStyles}><b>Approval Status</b></th>
                        <th style={tableHeaderStyles}><b>Is Default</b></th>
                        <th style={tableHeaderStyles}><b>Approved Date</b></th>
                        <th style={tableHeaderStyles}><b>Action</b></th>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>43211234</td>
                        <td style={tableDataStyles}>ASAP Business</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2023</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>446746</td>
                        <td style={tableDataStyles}>Austine Business</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2022</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>4567467467</td>
                        <td style={tableDataStyles}>KQ Airways</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2022</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>43211234</td>
                        <td style={tableDataStyles}>ASAP Business</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2022</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>44643634</td>
                        <td style={tableDataStyles}>Echo Leather</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2022</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>432123414</td>
                        <td style={tableDataStyles}>Red Pill Company</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2022</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                    <tr style={tableRowStyles}>
                        <td style={tableDataStyles}>Feb 03 2022</td>
                        <td style={tableDataStyles}>43211234</td>
                        <td style={tableDataStyles}>ASAP Business</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "seagreen", border: "0px", padding: "8px", color: "white" }}>Approved</button></td>
                        <td style={tableDataStyles}><button style={{ border: "0px", backgroundColor: "royalblue", padding: "5px", color: "white" }}>Make Default</button></td>
                        <td style={tableDataStyles}>March 03 2022</td>
                        <td style={tableDataStyles}><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-pencil-square"></i> Edit</button><b style={{ color: "red" }}>|</b><button style={{ backgroundColor: "transparent", border: "0px", color: "blue" }}><i class="bi bi-trash"></i> Delete</button></td>
                    </tr>
                </table>
                <div className="pages-prev-next" style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
                    <p style={{ marginLeft: "10px" }}>
                        Showing
                        <small style={{ marginLeft: "5px" }}>1</small>
                        <small style={{ marginLeft: "5px" }}>to</small>
                        <small style={{ marginLeft: "5px" }}>7</small>
                        <small style={{ marginLeft: "5px" }}>of</small>
                        <small style={{ marginLeft: "5px" }}>10</small>
                    </p>
                    <div className="first-prev-no-next-last" style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
                        <p style={{ marginLeft: "10px" }}><a href="www.google.com">First</a> </p>
                        <p style={{ marginLeft: "10px" }}><a href="www.google.com">Previous</a> </p>
                        <button style={{ marginLeft: "10px", height :"30px" , backgroundColor : "blue" , border : "0px", color : "white"  }}>1</button>
                        <p style={{ marginLeft: "10px" }}><a href="www.google.com">Last</a> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}