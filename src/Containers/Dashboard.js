import React, { Component } from 'react';
import '../assets/css/Dashboard.css';
import Sidebar from '../Components/Dashboard/Sidebar';
import DailyVisitors from '../Components/Dashboard/Daily-Visitors';
import Users from '../Components/Dashboard/RealTime-Users';
import Duration from '../Components/Dashboard/Visit-Duration';
import Visits from '../Components/Dashboard/Total-Visits';
import Rate from '../Components/Dashboard/Bounce-Rate';
import PageVisited from '../Components/Dashboard/Most-Visited-Page';
import Traffic from '../Components/Dashboard/Social-Media-Traffic';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';


class Dashboard extends Component {
  state = {
    barData: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
      ],
      datasets: [
        {
          label: "Visitors",
          data: [
            3500, 3500, 3500, 3500, 2300, 5500, 7523, 6356, 2452, 3265,
            3000, 5555, 2305, 4127, 6352, 4578, 5234, 6035, 5236, 4569,
            2354, 1498, 5645, 2653, 1243, 2568, 3207, 8456, 7452, 2345, 5000
          ],
          backgroundColor: '#0000FF',
          barThickness: 12,
          borderRadius: 23
        }
      ]
    },
    lineChart1: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
      datasets: [
        {
          label: "visits",
          data: [
            3500,
            1253,
            4020,
            3023,
            1601,
            6223,
            3122,
            4012,
            1023,
            500,
            3265,
            3560
          ],
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          borderWidth: '2',
          // borderColor: 'rgba(0, 0, 255)',
          borderColor: 'rgb(0, 128, 255)',
          pointRadius: 0,
          lineTension: 0
        }
      ]
    },
    lineChart2: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
      datasets: [
        {
          label: "visits",
          data: [
            3500,
            1253,
            4020,
            3023,
            1601,
            6223,
            3122,
            4012,
            1023,
            500,
            3265,
            3560
          ],
          backgroundColor: 'rgba(34, 139, 34, 0.1)',
          borderWidth: '2',
          borderColor: 'rgb(41, 163, 41)',
          pointRadius: 0,
          lineTension: 0
        }
      ]
    },
    lineChart3: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
      datasets: [
        {
          label: "visits",
          data: [
            3500,
            1253,
            4020,
            3023,
            1601,
            6223,
            3122,
            4012,
            1023,
            500,
            3265,
            3560
          ],
          backgroundColor: 'rgba(137, 86, 255, 0.1)',
          borderWidth: '2',
          borderColor: 'rgba(137, 86, 255)',
          pointRadius: 0,
          lineTension: 0.1
        }
      ]
    },
    lineChart4: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
      datasets: [
        {
          label: "visits",
          data: [
            3500,
            1253,
            4020,
            3023,
            1601,
            6223,
            3122,
            4012,
            1023,
            500,
            3265,
            3560
          ],
          backgroundColor: 'rgba(255,255,0, 0.1)',
          borderWidth: '2',
          borderColor: 'rgba(255,255,0)',
          pointRadius: 0,
          lineTension: 0
        }
      ]
    },
    lineChart5: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
      datasets: [
        {
          label: "visits",
          data: [
            3500,
            1253,
            4020,
            3023,
            1601,
            6223,
            3122,
            4012,
            1023,
            500,
            3265,
            3560
          ],
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          borderWidth: '2',
          // borderColor: 'rgba(0, 0, 255)',
          borderColor: 'rgb(0, 128, 255)',
          pointRadius: 0,
          lineTension: 0
        }
      ]
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <nav className="navbar navbar-expand-lg navbar-light bg-white cutshort-navbar">
          <div className="col-lg-2 col-md-2 col-sm-4 col-hs-4 navbar-brand custom-navbar-brand">
            <div className="navbar-line">
              <HomeOutlinedIcon className="home-icon" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-4 col-hs-4 dashboard-title">Dashboard</div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-hs-4">
            <div className="language-selector">
              <ReactFlagsSelect
                defaultCountry="GB"
                countries={["US", "GB", "FR", "DE", "IT"]}
                customLabels={{ "US": "ENG", "GB": "ENG", "FR": "FR", "DE": "DE", "IT": "IT" }}
                selectedSize={14}
                optionsSize={14}
              />
              <i className="fas fa-caret-up fa-xs select-caret-up "></i>
              <i className="fas fa-caret-down fa-xs select-caret-down"></i>
            </div>
          </div>
        </nav>

        <div className="wrapper">
          <div className="container-fluid pr-0 x">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-sm-12 sidebar">
                <Sidebar />
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12 content">
                <div className="container main-content">
                  <div className="row row-1">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-hs-12 daily-visitors">
                      <DailyVisitors data={this.state.barData} />
                    </div>
                  </div>
                  <div className="row row-2">
                    <div className="realtime-users">
                      <Users data={this.state.lineChart1} />
                    </div>
                    <div className="realtime-users">
                      <Visits data={this.state.lineChart2} />
                    </div>
                    <div className="realtime-users">
                      <Rate data={this.state.lineChart3} />
                    </div>
                    <div className="realtime-users">
                      <Duration data={this.state.lineChart4} />
                    </div>
                  </div>
                  <div className="row row-3">
                    <div className="most-visited">
                      <PageVisited data={this.state.lineChart5} />
                    </div>
                    <div className="media-traffic">
                      <Traffic />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;