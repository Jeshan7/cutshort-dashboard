import React from 'react';
import '../../assets/css/Sidebar.css';
import image from '../../assets/images/13.jpg';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Sidebar() {
    return (
      <div className="Sidebar"> 
        <div className="profile-box"> 
         <div className="pro">
           <img src={image} alt="Profile Image" className="profile-image" />
           <i className="fas fa-cog fa-lg settings"></i>
           </div>
           <div className="user-name"> Jeshan Khan </div>
           <div className="user-role"> Developer </div>
        </div>   
        <div className="sidebar-wrapper">
          <ul>
            <li>
            {/* <i className="fas fa-chart-line fa-lg sidebar-icons"></i> */}
            <DashboardOutlinedIcon className="sidebar-icons"/>
              <a data-toggle="collapse"
                 href="#collapseData"
                 aria-expanded="false"
                 aria-controls="collapseData"
                 className="dashboard-sidebar">
                  Dashboard                
              </a>
              <ArrowDropDownIcon className="dropdown-arrow"/>
              {/* <span className="caret dropdown-caret"></span> */}
                <div className="collapse show collapseData" id="collapseData">
                  
                  <div  className="abs">
                  <span className="collapse-items">Page Visitors</span>
                  <br />
                  </div>
                  <div className="abs">
                  <span className="collapse-items">Post Performance</span>
                  <br />
                  </div>
                  <div className="abs"><span className="collapse-items">Team  Overall</span></div>
                </div>
            </li>
            <li> <CalendarTodayOutlinedIcon className="sidebar-icons"/>
              {/* <i className="far fa-calendar fa-lg sidebar-icons"></i>  */}
              Calendar </li>
            <li> 
              {/* <i className="fas fa-inbox fa-2x sidebar-icons"></i>  */}
              <InboxOutlinedIcon className="sidebar-icons"/> 
              Inbox 
            </li>
            <li> 
              {/* <i className="far fa-file-alt fa-lg sidebar-icons"></i> */}
               <DescriptionOutlinedIcon className="sidebar-icons"/>
               Invoicing 
            </li>
            <li> 
              <i className="fas fa-vials fa-lg sidebar-icons"></i> 
              
              Lab/Experimental</li>
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