import React from 'react';
import '../../assets/css/Daily-Visitors.css';
import BarChart from '../../Containers/BarChart';
import { useState } from 'react';

function DailyVisitors(props) {

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const year = ["2010", "2011", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  let day_values = ["December"]

  const [my_state, setState] = useState({
    "month": "January",
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
          <div className="col-md-2 month-dropdown">
            <select onChange={onMonthChange} className="browser-default custom-select">
              {month.map(function (name, index) {
                return <option className="custom-option" key={index} value={index}>{name}</option>;
              })}
            </select>
            <i className="fas fa-caret-up fa-xs month-caret-up "></i>
            <i className="fas fa-caret-down fa-xs month-caret-down"></i>
          </div>
          <div className="col-md-2 year-dropdown">
            <select onChange={onYearChange} className="browser-default custom-select year-select">
              {year.map(function (name, index) {
                return <option className="custom-option" key={index} value={index}>{name}</option>;
              })}
            </select>
              <i className="fas fa-caret-up fa-xs year-caret-up "></i>
              <i className="fas fa-caret-down fa-xs year-caret-down"></i>
          </div>
        </div>
      </div>
      <div className="histogram">
        <BarChart
          className = "bar-height"
          data={props.data}
          tooltipsLabel={day_values}
          month={my_state.month}
          year={my_state.year}
        />
      </div>
    </div>
  );
}

export default DailyVisitors;