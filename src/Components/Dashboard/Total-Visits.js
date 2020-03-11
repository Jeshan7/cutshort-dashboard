import React from 'react';
import '../../assets/css/Line-chart.css';
import { Line } from 'react-chartjs-2';

function Visits(props) {
    return (
      <div className="Visits">   
        <div className="heading">
          TOTAL VISITS
        </div>
        <div className="value">
          54,598
        </div>
        <div className="percentage-red">
          -11.9%
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

export default Visits;