import React from "react";
import { ReactComponent as MyIcon } from "../Assests/logoicon.svg";
import "./Style/sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <MyIcon />
      </div>
      <p className="start-para-tag">TRY OUR ONLINE EDITOR</p>
      <button className="editor-link-btn">Start Coding</button>
<div className="toggle-sidebar">

     
      <svg viewBox="-122.9 121.1 105.9 61.9" width="20" height="20"><path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path></svg>
</div>
    </div>
  );
};

export default Sidebar;
