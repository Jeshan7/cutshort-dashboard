import React from 'react';
import '../../assets/css/Traffic.css';

const Traffic = () => {
  return(
    <div>
      <div class="heading-3">
        Social Media Traffic      
      </div>
      <table className="table">
        <thead>
            <tr>
              <th scope="col"> NETWORK </th>
              <th scope="col"> VISITORS </th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td className="network"> Instagram </td>
              <td> 3,550 
              <div className="progress progress-1">
                <div class="progress-bar"
                     role=" progressbar"
                     style={{ width: "75%", borderRadius: "5px" }}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="50">
                </div>
              </div>
              </td>
            </tr>
            <tr>
              <td className="network"> Facebook </td>
              <td> 2,236 
              <div className="progress progress-2">
                <div className="progress-bar"
                     role=" progressbar"
                     style={{ width: "50%", borderRadius: "5px" }}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="50">
                </div>
              </div>  
              </td>
            </tr>
            <tr>
              <td className="network"> Twitter </td>
              <td> 1,795 
              <div className="progress progress-3">
                <div className="progress-bar"
                     role=" progressbar"
                     style={{ width: "25%", borderRadius: "5px" }}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="50">
                </div>
              </div>  
              </td>
            </tr>
            <tr>
              <td className="network"> Linkedin </td>
              <td> 62
              <div className="progress progress-4">
                <div className="progress-bar"
                     role=" progressbar"
                     style={{ width: "15%", borderRadius: "5px" }}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="50">
                </div>
              </div>
              </td>
            </tr>
        </tbody>
      </table>    
    </div>
  );      
}

export default Traffic;