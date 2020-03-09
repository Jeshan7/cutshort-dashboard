import React from 'react';
import '../../assets/css/Sidebar.css';
import image from '../../assets/images/13.jpg';

function Sidebar() {
    return (
      <div className="Sidebar"> 
        <div className="profile-box"> 
         <div className="">
           <img src={image} alt="Profile Image" className="profile-image" />
           <div className="user-name"> Jeshan Khan </div>
           <div className="user-role"> Developer </div>
         </div> 
        </div>   
        <div className="sidebar-wrapper">
          <ul>
            <li> <i className="fab fa-airbnb fa-lg sidebar-icons"></i> Dashboard </li>
            <li> <i className="fab fa-airbnb fa-lg sidebar-icons"></i> Calendar </li>
            <li> <i className="fab fa-airbnb fa-lg sidebar-icons"></i> Inbox </li>
            <li> <i className="fab fa-airbnb fa-lg sidebar-icons"></i> Invoicing </li>
            <li> <i className="fab fa-airbnb fa-lg sidebar-icons"></i> Lab/Experimental</li>
          </ul>
        </div>
        <div className="sidebar-wrapper-2">
          <span className="block block-1"> RECENTLY VIEWED </span>
          <span className="block block-2"> 
              Overall Performance 
            <i className="fas fa-arrow-right f-arrow"></i>
          </span>
          <span className="block block-3"> 
              Invoice #420
            <i className="fas fa-arrow-right f-arrow"></i>
          </span>
          <span className="block block-4"> 
              Customer Minerva Viewer 
            <i className="fas fa-arrow-right f-arrow"></i>
          </span>
        </div>
        <div className="sidebar-wrapper-3">
        <span className="page-details-1"> Page: </span>
          <span className="page-details-2"> dribble.com/janlosert </span>
          <br />
          <span className="page-details-3"> 575940-1811 </span>
        </div>
      </div>
    );
}

export default Sidebar;