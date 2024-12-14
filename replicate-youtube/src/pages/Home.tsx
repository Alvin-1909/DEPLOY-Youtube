// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import "../app/globals.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="video-grid">
          <VideoCard
            title="Learn React"
            description="A tutorial on React JS"
            thumbnail="https://via.placeholder.com/300"
          />
          <VideoCard
            title="Understanding TypeScript"
            description="Intro to TypeScript for beginners"
            thumbnail="https://via.placeholder.com/300"
          />
          {/* Tambahkan lebih banyak VideoCard di sini */}
        </div>
      </div>
    </div>
  );
};

export default Home;
