import React from 'react';
import '../../assets/css/Line-chart.css';
import { Line } from 'react-chartjs-2';
import profitIcon from '../../assets/images/profit.png';

function Duration(props) {
    return (
      <div className="Duration">   
        <div className="heading">
          VISIT DURATION
        </div>
        <div className="value">
          1m 4s
        </div>
        <div className="percentage-green">
          +19.6%
          <img className="loss-icon" src={profitIcon}/>
        </div>
        <div className="line-chart">
        <Line
          data={props.data}
          options={{ 
            maintainAspectRatio: false,
            bezierCurve: false,
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

export default Duration;