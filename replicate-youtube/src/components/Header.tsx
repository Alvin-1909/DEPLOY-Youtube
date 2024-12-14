import React from "react";
import "../app/globals.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="../assets/youtube-logo.png" alt="YouTube" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="user-profile">
        <img src="https://www.example.com/profile-pic.jpg" alt="User" />
      </div>
    </header>
  );
};

export default Header;
