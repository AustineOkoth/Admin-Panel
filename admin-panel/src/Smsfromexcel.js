import React from "react";

export default function Smsfromexcel() {
    const containerStyles = {
        backgroundColor: "white",
        marginLeft: "10px",
        padding: "15px",

    }
    const fileStyles = {
        backgroundColor: "white",
        padding: "5px",
        border: "1px solid black",
        width: "max-content"
    }

    const buttonStyles = {
        backgroundColor: "rgb(14, 150, 93)",
        marginRight: "5px",
        marginTop: "10px",
        padding: "6px",
        color: "white",
        border: "0px"

    }

    return (
        <>
            <h4 style={{ marginLeft: "10px", fontFamily: "sans-serif" }}>SMS From Excel</h4>
            <div className="smsfromexcel-container" style={containerStyles}>
                <div className="smsfromexcel-inputs-buttons">

                    <div className="smsfromexcel-input" style={fileStyles}>
                        <input type="file" />
                    </div>

                    <div className="smsfromexcel-buttons">
                        <button style={buttonStyles}>View Button</button>
                        <button style={buttonStyles} >Upload</button>
                    </div>
                </div>

            </div>


        </>

    )
}