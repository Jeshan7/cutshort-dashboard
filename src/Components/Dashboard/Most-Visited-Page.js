import React from 'react';
import '../../assets/css/Most-Visited-Pages.css';
import { Line } from 'react-chartjs-2';

const PageVisited = (props) => {
  return(
    <div>
      <div class="heading-2">
        Most Visited Pages      
      </div>
      <table className="table">
        <thead>
            <tr>
              <th scope="col" className="page-name"> PAGE NAME </th>
              <th scope="col" className="visitors"> VISITORS </th>
              <th scope="col" className="unique-page-visits"> UNIQUE PAGE VISITS </th>
              <th scope="col"> BOUNCE RATE </th>  
            </tr>
        </thead>
        <tbody>
            <tr>
              <td> /store/ 
                <i class="fas fa-external-link-alt ext-icon"></i>
              </td>
              <td> 4,890 </td>
              <td> 3,985 </td>
              <td> 81.56%
              <div className="line-a">   
                <Line
                  data={props.data}
                  
                  options={{ 
                    responsive:true,
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
              </td>
            </tr>
            <tr>
              <td> /store/symbols-styleguides
                <i class="fas fa-external-link-alt ext-icon"></i>
              </td>
              <td> 3,785 </td>
              <td> 3,182 </td>
              <td> 62.56%
              <div className="line-b">   
                <Line
                  data={props.data}
                  
                  options={{ 
                    responsive:true,
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
              </td>
            </tr>
            <tr>
              <td> /store/dashboard-ui-kit 
                <i class="fas fa-external-link-alt ext-icon"></i>
              </td>
              <td> 2,985 </td>
              <td> 2,115 </td>
              <td> 58.76% 
              <div className="line-c">   
                <Line
                  data={props.data}
                  
                  options={{ 
                    responsive:true,
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
              </td>
            </tr>
            <tr>
              <td>/store/webflow-cards.html
                <i class="fas fa-external-link-alt ext-icon"></i>
              </td>
              <td> 2,440 </td>
              <td> 1,789 </td>
              <td> 39.59%
              <div className="line-d">   
                <Line
                  data={props.data}
                  options={{ 
                    responsive:true,
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
              </td>
            </tr>
        </tbody>
      </table>    
    </div>
  );      
}

export default PageVisited;