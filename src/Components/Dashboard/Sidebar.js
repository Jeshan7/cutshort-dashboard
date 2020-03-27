import React from 'react';
import '../../assets/css/Sidebar.css';
import image from '../../assets/images/13.jpg';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="profile-box">
        <div className="profile-image-box">
          <img src={image} alt="Profile Image" className="profile-image" />
          <i className="fas fa-cog fa-lg settings"></i>
        </div>
        <div className="user-name">
          Jeshan Khan
          <div className="online"></div>
        </div>
        <div className="user-role"> Developer </div>
      </div>
      <div className="sidebar-wrapper-1">
        <ul>
          <li>
            <DashboardOutlinedIcon className="sidebar-icons" style={ props.color ? { color: "blue"} : null}/>
            <div className="dash">
              <a data-toggle="collapse"
                href="#collapseData"
                aria-expanded="false"
                aria-controls="collapseData"
                className="dashboard-sidebar"
                onClick={() => props.handleClickEvent()}>
                Dashboard
                <ArrowDropDownIcon className="dropdown-arrow" style={ props.color ? { color: "blue"} : null}/>
              </a>
              <div className="collapse show collapseData" id="collapseData">
                <div className="collapse-data">
                  <span className="collapse-items">Page Visitors</span>
                  <br />
                </div>
                <div className="collapse-data">
                  <span className="collapse-items">Post Performance</span>
                  <br />
                </div>
                <div className="collapse-data"><span className="collapse-items">Team  Overall</span></div>
              </div>
            </div>
          </li>
          <li> <CalendarTodayOutlinedIcon className="sidebar-icons" />
            <div className="dash">Calendar</div> </li>
          <li>
            <InboxOutlinedIcon className="sidebar-icons" />
            <div className="dash">Inbox
              <i className="fas fa-caret-up fa-xs inbox-caret-up "></i>
              <i className="fas fa-caret-down fa-xs inbox-caret-down"></i></div>
          </li>
          <li>
            <DescriptionOutlinedIcon className="sidebar-icons" />

            <div className="dash">Invoicing</div>
          </li>
          <li>
            <i className="fas fa-vials fa-lg lab-icon"></i>
            <div className="dash">Lab/Experimental</div>
          </li>
        </ul>
      </div>
      <div className="sidebar-wrapper-2">
        <span className="block block-1"> RECENTLY VIEWED </span>
        <span className="block block-2">
          Overall Performance
            <i className="fas fa-long-arrow-alt-right f-arrow-1"></i>
        </span>
        <span className="block block-3">
          Invoice #420
            <i className="fas fa-long-arrow-alt-right f-arrow-2"></i>
        </span>
        <span className="block block-4">
          Customer Minerva Viewer
            <i className="fas fa-long-arrow-alt-right f-arrow-3"></i>
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