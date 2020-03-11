import React from 'react';
import '../../assets/css/Line-chart.css';
import { Line } from 'react-chartjs-2';

function Rate(props) {
    return (
      <div className="Rate">   
        <div className="heading">
          BOUNCE RATE
        </div>
        <div className="value">
          73.67%
        </div>
        <div className="percentage-green">
          +12.2%
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

export default Rate;