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
              <span style={{float:"right"}}><i class="fas fa-external-link-alt ext-icon"></i></span>
              </td>
              <td> 4,890 </td>
              <td> 3,985 </td>
              <td> <div className="container row">
              <div>81.56%</div>
              <div className="line-common">   
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
              </div>
              </td>
            </tr>
            <tr>
              <td> /store/symbols-styleguides
              <span style={{float:"right"}}><i class="fas fa-external-link-alt ext-icon"></i></span>
              </td>
              <td> 3,785 </td>
              <td> 3,182 </td>
              <td> 
               <div className="container row">
                    <div>62.56%</div>     
              <div className="line-common">   
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
                            </div>





              </td>
            </tr>
            <tr>
              <td> /store/dashboard-ui-kit 
              <span style={{float:"right"}}><i class="fas fa-external-link-alt ext-icon"></i></span>
              </td>
              <td> 2,985 </td>
              <td> 2,115 </td>
              <td> <div className="container row">
                
              <div>58.76% </div>
              <div className="line-common">   
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
                
                </div>  
              </td>
            </tr>
            <tr>
              <td>/store/webflow-cards.html
               <span style={{float:"right"}}><i class="fas fa-external-link-alt ext-icon"></i></span>
              </td>
              <td> 2,440 </td>
              <td> 1,789 </td>
              <td> <div className="container row">
              <div>39.59%</div>
              <div className="line-common">   
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


              </div>
              </td>
            </tr>
        </tbody>
      </table>    
    </div>
  );      
}

export default PageVisited;