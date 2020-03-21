import React from 'react';
import '../../assets/css/Traffic.css';

const Traffic = () => {
  return (
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
          <tr className="table-row">
            <td className="network"> Instagram </td>
            <td>
              <div className="container row row-abc">
                <div>3,550</div>
                <div className="progress">
                  <div class="progress-bar"
                    role=" progressbar"
                    style={{ width: "75%", borderRadius: "5px" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="50">
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="network"> Facebook </td>
            <td> <div className="container row row-abc">
              <div>3,550</div>
              <div className="progress">
                <div class="progress-bar"
                  role=" progressbar"
                  style={{ width: "75%", borderRadius: "5px" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="50">
                </div>
              </div>
            </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="network"> Twitter </td>
            <td> <div className="container row row-abc">
              <div>3,550</div>
              <div className="progress">
                <div class="progress-bar"
                  role=" progressbar"
                  style={{ width: "50%", borderRadius: "5px" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="50">
                </div>
              </div>
            </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="network"> Linkedin </td>
            <td> <div className="container row row-abc">
              <div>3,550</div>
              <div className="progress">
                <div class="progress-bar"
                  role=" progressbar"
                  style={{ width: "25%", borderRadius: "5px" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="50">
                </div>
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