import React from 'react';
import '../../assets/css/Daily-Visitors.css';
import BarChart from '../../Containers/BarChart';
import { useState } from 'react';

function DailyVisitors(props) {
  
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const year = ["2010", "2011", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
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
        />
        </div>
      </div>
    );
}

export default DailyVisitors;