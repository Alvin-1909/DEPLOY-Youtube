// src/components/VideoCard.tsx
import React from "react";
import "../app/globals.css";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnail,
}) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt="Video Thumbnail" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VideoCard;
