import React from 'react';
import '../../assets/css/Line-chart.css';
import { Line } from 'react-chartjs-2';
import profitIcon from '../../assets/images/profit.png';

function Users(props) {
    return (
      <div className="Users">   
        <div className="heading">
          REALTIME USERS
        </div>
        <div className="value">
          56
        </div>
        <div className="percentage-green">
          +9.8%
          <img className="loss-icon" src={profitIcon}/>
        </div>
        <div className="line-chart">
        <Line
          data={props.data}
          options={{ 
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
              xAxes: [{
                gridLines: false,
                ticks: {
                  beginAtZero: true,
                  display: false
                }
            }],
            yAxes: [{
              gridLines: false,
                ticks: {
                  beginAtZero: true,
                  gridLines: false,
                  display: false
                }
              }]
            }
          }}
        />
        </div>
      </div>
    );
}

export default Users;