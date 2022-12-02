import React from "react";


export default function DropDownUser(props) {
    return (
        <div className={`DropDownUser-container-${props.value}`}>
            <div className="welcome-id-ip-date">
                <small>Welcome Austine</small><br />
                <small> [2345678]</small><br />
                <small>last login IP : 192.168.0.1</small><br />
                <small>Last Login Date: 2022/08/23</small>
            </div>
            <div className="myProfile">
                <a href="www.google.com"><i class="bi bi-person"> </i><small>My Profile</small></a>
            </div>
            <div className="changePassword">
                <a href="www.google.com"><i class="bi bi-gear"></i><small> Change Password</small></a>
            </div>
            <div className="logOut">
                <a href="www.google.com"><i class="bi bi-box-arrow-right"></i><small> Log Out</small></a>
            </div>

        </div>
    )
}