import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import SmsFromExcel from "./Smsfromexcel"
import SmsStatusView from './SmsStatusView';
import SmsGraphView from './SmsGraphView';
import ManageSenderId from './ManageSenderId';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import Managetemplate from './ManageTemplate';
// import axios from 'axios'


export default function App() {

    function Homepage() {
        return (
            <>
                < TopNav />
                <div className="sideNav-container">
                    < SideNav />
                    <div className="SideStatusView-SideGraphView">
                        < SmsStatusView />
                        < SmsGraphView />
                    </div>
                </div>
            </>
        )
    }
    function SmsExcel() {
        return (
            <div>
                < TopNav />
                <div className="sideNav-container">
                    < SideNav />
                    <div className="SideStatusView-SideGraphView">
                        < SmsFromExcel />
                    </div>
                </div>
            </div>
        )
    }
    function ManageSender() {
        return (
            <div>
                < TopNav />
                <div className="sideNav-container">
                    < SideNav />
                    <div className="SideStatusView-SideGraphView">
                        < ManageSenderId />
                    </div>
                </div>
            </div>
        )
    }
    function ManageTemplate() {
        return (
            <div>
                < TopNav />
                <div className="sideNav-container">
                    < SideNav />
                    <div className="SideStatusView-SideGraphView">
                        < Managetemplate />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={< Homepage />} />
                    < Route path='/smsfromexcel' element={< SmsExcel />} />
                    < Route path='/managesenderid' element={< ManageSender />} />
                    < Route path='/managetemplate' element={< ManageTemplate />} />
                </Routes>
            </Router>
        </>
    )
}