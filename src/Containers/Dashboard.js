import React, { Component } from 'react';
import '../assets/css/Dashboard.css';
import Sidebar from '../Components/Dashboard/Sidebar';
import DailyVisitors from '../Components/Dashboard/Daily-Visitors';

class Dashboard extends Component {
    render() {
        return (
          <div className="Dashboard">
            <nav className="navbar navbar-expand-lg navbar-light bg-white cutshort-navbar">
              <span className="col-md-2 navbar-brand home-icon">
                <i class="fas fa-camera fa-xs"></i> 
              </span>
              <div className="col-md-8 dashboard-title">Dashboard</div>
              <div className="col-md-2 language-selector"></div>
            </nav>

            <div className="wrapper">
              <div className="container-fluid pr-0 x">
                <div className="row">
                  <div className="col-md-2 sidebar">
                    <Sidebar />
                  </div>
                  <div className="col-md-10 py-4 mt-2 content">
                    <div className="container main-content">
                    <div className="row px-4 ml-1 row-1">
                      <div className="col-md-12 daily-visitors">
                        <DailyVisitors />
                      </div> 
                    </div>
                    <div className="row mt-4 px-4 ml-1 row-2">
                      <div className="col-md-2 py-2 mt-2 realtime-users"></div>
                      <div className="col-md-2 py-2 mt-2 total-visits"></div>
                      <div className="col-md-2 py-2 mt-2 bounce-rate"></div>
                      <div className="col-md-2 py-2 mt-2 visit-duration"></div> 
                    </div>
                    <div className="row mt-4 px-4 ml-1 ">
                      <div className="col-md-5 most-visited"></div>
                      <div className="col-md-5 media-traffic"></div> 
                    </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            
            <div className="main-content">
              <div className="container-fluid">
                
              </div>
            </div>
          </div>
        );
    }
}

export default Dashboard;