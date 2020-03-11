import React from 'react';
import '../../assets/css/Daily-Visitors.css';
import { Bar } from 'react-chartjs-2';

function DailyVisitors(props) {
    return (
      <div className="DailyVisitors">   
        <div className="header">
          Daily Visitors
        </div>
        <div className="histogram">
        <Bar
          data={props.data}
          options={{ 
            responsive: true,
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: false
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  // steps: 10,
                  // stepValue: 5,
                  stepSize: 3000,
                  min: 0,
                  max: 9000,
                  display: false
                }
              }],
            }
          }}
        />
        </div>
      </div>
    );
}

export default DailyVisitors;