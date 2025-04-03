"use client";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const YouTubeThumbnail = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const playIcon = "https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg";

  return (
    <div className="relative w-full flex items-center justify-center  mx-auto">
      {/* Thumbnail Image */}
      <img
        src={thumbnailUrl}
        alt="YouTube Thumbnail"
        className="w-full max-w-full h-auto cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
      />

      {/* Play Button (Centered) */}
      <img
        src={playIcon}
        onClick={() => setIsOpen(true)}
        alt="Play Button"
        className="absolute inset-0 w-20 cursor-pointer h-20 md:w-24 md:h-24 mx-auto my-auto"
      />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-lg p-2">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-16 right-8 text-white text-2xl cursor-pointer"
            >
              <IoCloseCircle size={32} />
            </button>

            {/* YouTube Embed */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              className="w-full h-[315px] md:w-[700px] md:h-[400px] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeThumbnail;
