import React from 'react';
import '../../assets/css/Daily-Visitors.css';
import { Bar } from 'react-chartjs-2';
import BarChart from '../../Containers/BarChart';
import SelectPage from './Select';
import { useState } from 'react';

function DailyVisitors(props) {
  
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const year = ["2010", "2011", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  let name_month = "months";
  let name_year = "year";
  let day_values = ["December"]

  const[my_state, setState] = useState({
    "month":"January",
    "year": "2001"
  })

  const onMonthChange = (e) => {
    setState({
      "month": month[e.target.value]
    });
  }

  const onYearChange = (e) => {
    setState({
      "year": year[e.target.value]
    });
  }

  return (
      <div className="DailyVisitors">   
        <div className="row header">
            Daily Visitors  
            <div className="dailyvisit-select">
          <div className="col-md-2">
            <select onChange={onMonthChange} className="browser-default custom-select">
              {month.map(function(name, index){
                return <option className="custom-option" key={ index } value={ index }>{name}</option>;
              })}
            </select>
          </div>
          <div  className="col-md-2"> 
            <select onChange={onYearChange} className="browser-default custom-select">
              {year.map(function(name, index){
                return <option className="custom-option" key={ index } value={ index }>{name}</option>;
              })}
            </select>
          </div>
        </div>
        </div>
        <div className="histogram">  
        <BarChart
          className="abc"
          data={props.data}
          tooltipsLabel={day_values}
          month={my_state.month} 
          year={my_state.year} 
          options={{ 
            responsive: true,
            legend: {
              display: false,
            },
            tooltips: {
              yAlign: 'bottom',
              title: 'Custom Chart Title',
              callbacks: {
                  labelColor: function(tooltipItem, chart) {
                      return {
                          // borderColor: '#000',
                          backgroundColor: 'rgb(0, 0, 255)'  
                      } 
                  },
                  labelTextColor: function(tooltipItem, chart) {
                    return 'black';
                }
              },
              backgroundColor: 'white ',
              borderColor: 'grey',
              borderWidth: 0.25,
              xPadding: 6,
              yPadding: 6,
              titleFontColor: 'red'
              // showShadow:true
              // boxShadow: "0 0px 3px 0 rgba(0, 0, 0, 0.17)"
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                gridLines: {
                  tickMarkLength: 10,
                  display: false 
                }
              }],
              yAxes: [{
                gridLines: {
                  drawBorder: false
                },
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