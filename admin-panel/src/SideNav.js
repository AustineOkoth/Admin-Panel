import React from "react"
export default function SideNav() {

  let [setIcon, setIconState] = React.useState("left")
  let [setIcon2, setIcon2State] = React.useState("left")
  let [setIcon3, setIcon3State] = React.useState("left")
  let [setIcon4, setIcon4State] = React.useState("left")
  let [setIcon5, setIcon5State] = React.useState("left")


  function SmsDropDown() {
    let smsDrop = document.getElementById("sideNav-dropdown-sms");
    if (smsDrop.innerHTML === "") {
      setIconState(setIcon => "down");
      smsDrop.innerHTML = `
        <ul>
         <li><i class="bi bi-envelope-open-fill" style="color:green;padding-right:10px;"></i>Compose SMS </li>
         <li><i class="bi bi-command" style="color:green;padding-right:10px;"></i><a href = "http://localhost:3000/smsfromexcel">SMS From Excel </a></li>
         <li><i class="bi bi-layers-fill" style="color:green;padding-right:10px;"></i><a href = "http://localhost:3000/managesenderid">Manage Sender Id </a></li>
         <li><i class="bi bi-shield-slash" style="color:green;padding-right:10px;"></i><a href = "http://localhost:3000/managetemplate" >Manage Template </a></li>
        </ul>`;
    }
    else {
      setIconState(setIcon => "left")
      smsDrop.innerHTML = ``
    }
  }

  function ContactDropDown() {
    let contactDrop = document.getElementById("sideNav-dropdown-contacts");
    if (contactDrop.innerHTML === ``) {
      setIcon2State(setIcon2 => "down");
      contactDrop.innerHTML = `
        <ul>
         <li><i class="bi bi-person-lines-fill" style="color:green;padding-right:10px;"></i>Contact 1</li>
         <li><i class="bi bi-person-lines-fill" style="color:green;padding-right:10px;"></i>Contact 2</li>
         <li><i class="bi bi-person-lines-fill" style="color:green;padding-right:10px;"></i>Contact 3</li>
        </ul>`

    } else {
      setIcon2State(set2Icon => "left")
      contactDrop.innerHTML = ``
    }
  }
  function ReportDropDown() {
    let reportDrop = document.getElementById("sideNav-dropdown-report");

    if (reportDrop.innerHTML === ``) {
      setIcon3State(set3Icon => "down");
      reportDrop.innerHTML = `
        <ul>
         <li><i class="bi bi-envelope-open-fill" style="color:green;padding-right:10px;"></i>Report 1</li>
         <li><i class="bi bi-command" style="color:green;padding-right:10px;"></i>Report 2</li>
         <li><i class="bi bi-layers-fill" style="color:green;padding-right:10px;"></i>Report 3</li>
        </ul>`
    } else {
      setIcon3State(set3Icon => "left")
      reportDrop.innerHTML = ``
    }
  }
  function ApplicationDropDown() {
    let applicationDrop = document.getElementById("sideNav-dropdown-application");
    if (applicationDrop.innerHTML === ``) {
      setIcon4State(set4Icon => "down");
      applicationDrop.innerHTML = `
        <ul>
         <li><i class="bi bi-ui-checks-grid" style="color:green;padding-right:10px;"></i>Application 1</li>
         <li><i class="bi bi-ui-checks-grid" style="color:green;padding-right:10px;"></i>Application 2</li>
         <li><i class="bi bi-ui-checks-grid" style="color:green;padding-right:10px;"></i>Application 3</li>
        </ul>`
    } else {
      setIcon4State(set4Icon => "left")
      applicationDrop.innerHTML = ``
    }
  }
  function SettingDropDown() {
    let settingDrop = document.getElementById("sideNav-dropdown-setting");
    if (settingDrop.innerHTML === ``) {
      setIcon5State(set5Icon => "down");
      settingDrop.innerHTML = `
        <ul>
         <li><i class="bi bi-envelope-open-fill" style="color:green;padding-right:10px;"></i>Setting 1</li>
         <li><i class="bi bi-command" style="color:green;padding-right:10px;"></i>Setting 2</li>
         <li><i class="bi bi-layers-fill" style="color:green;padding-right:10px;"></i>Setting 3</li>
        </ul>`
    } else {
      setIcon5State(set5Icon => "left")
      settingDrop.innerHTML = ``
    }
  }






  return (
    <div className="sideNav-container">
      <div className="sideNav-components">
        <div className="sideBar-components-lists">

          <div id="sms-container">
            <div id="sidenav-data-sms" className="sideNav-individual-component-user" onClick={SmsDropDown}>
              <svg style={{ paddingLeft: "5px", color: "green", paddingRight: "5px", height: "fit-content", marginTop: "16px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
              <p className="sideNav-links">SMS</p>
              <i className={`bi bi-chevron-${setIcon}`} id="sideNav-dropDown-sms"></i>
            </div>
            <div id="sideNav-dropdown-sms" ></div>
          </div>

          <div id="contacts-container">
            <div id="sidenav-data-contacts" className="sideNav-individual-component-contacts" onClick={ContactDropDown}>
              <i style={{ paddingLeft: "5px", color: "green", paddingRight: "5px", height: "fit-content", marginTop: "auto", marginBottom: "auto" }} class="bi bi-person"></i>
              <p className="sideNav-links" >Contacts</p>
              <i className={`bi bi-chevron-${setIcon2}`} id="sideNav-dropDown-contacts"></i>
            </div>
            <div id="sideNav-dropdown-contacts"></div>
          </div>

          <div id="report-container">
            <div id="sidenav-data" className="sideNav-individual-component-report" onClick={ReportDropDown}>
              <i style={{ paddingLeft: "5px", color: "green", paddingRight: "5px", height: "fit-content", marginTop: "auto", marginBottom: "auto" }} class="bi bi-card-list"></i>
              <p className="sideNav-links">Reports</p>
              <i className={`bi bi-chevron-${setIcon3}`} id="sideNav-dropDown-reports"></i>
            </div>
            <div id="sideNav-dropdown-report"></div>
          </div>

          <div id="application-container">
            <div id="sidenav-data" className="sideNav-individual-component-application" onClick={ApplicationDropDown}>
              <i style={{ paddingLeft: "5px", color: "green", paddingRight: "5px", height: "fit-content", marginTop: "auto", marginBottom: "auto" }} class="bi bi-window"></i>
              <p className="sideNav-links">Application Bar</p>
              <i className={`bi bi-chevron-${setIcon4}`} id="sideNav-dropDown-application"></i>
            </div>
            <div id="sideNav-dropdown-application"></div>
          </div>

          <div id="setting-container">
            <div id="sidenav-data" className="sideNav-individual-component-setting" onClick={SettingDropDown}>
              <i style={{ paddingLeft: "5px", color: "green", paddingRight: "5px", height: "fit-content", marginTop: "auto", marginBottom: "auto" }} class="bi bi-gear"></i>
              <p className="sideNav-links">Settings</p>
              <i className={`bi bi-chevron-${setIcon5}`} id="sideNav-dropDown-settings"></i>
            </div>
            <div id="sideNav-dropdown-setting"></div>
          </div>

        </div>
      </div>
    </div>
  )
}
