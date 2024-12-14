import React from "react";
import "../app/globals.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
      </ul>
    </div>
  );
};

export default Sidebar;
