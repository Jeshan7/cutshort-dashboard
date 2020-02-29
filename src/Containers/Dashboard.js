import React, { Component } from 'react';
import '../assets/css/Dashboard.css';
import Sidebar from '../Components/Dashboard/Sidebar';
import DailyVisitors from '../Components/Dashboard/Daily-Visitors';

class Dashboard extends Component {
    render() {
        return (
          <div className="Dashboard">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <span className="navbar-brand" h1>Dashboard</span>
            </nav>

            <div className="wrapper">
              <div className="container-fluid x">
                <div className="row">
                  <div className="col-md-3 sidebar"></div>
                  <div className="col-md-9 content pt-3">
                    <div className="container">
                    <div className="row">
                      <div className="col-md-12 daily">
                        <DailyVisitors />
                      </div> 
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-3 daily1 "></div>
                      <div className="col-md-3 daily1 "></div>
                      <div className="col-md-3 daily1 "></div>
                      <div className="col-md-3 daily1 "></div> 
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-5 daily2 mr-4"></div>
                      <div className="col-md-5 daily2 mr-4"></div> 
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