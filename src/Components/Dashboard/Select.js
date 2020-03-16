import React, { Component } from 'react';
import '../../assets/css/Dashboard.css';

class SelectPage extends Component {
  render (props) {
    return(
      <div>
        <select className="browser-default custom-select">
          {this.props.data.map(function(name, index){
            return <option className="custom-option" key={ index } value={ index }>{name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default SelectPage;