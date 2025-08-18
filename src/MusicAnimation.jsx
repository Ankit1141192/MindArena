import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MusicAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen overflow-hidden 
      ${
        isPlaying
          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient"
          : "bg-gray-900"
      }`}
    >
      {/* Background Animated Circle */}
      {isPlaying && (
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-white/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      )}

      {/* Play / Pause Button */}
      <motion.button
        onClick={handlePlay}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: isPlaying ? [1, 1.1, 1] : 1,
        }}
        transition={{
          repeat: isPlaying ? Infinity : 0,
          duration: 1,
        }}
        className="z-10 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-2xl shadow-lg hover:bg-indigo-700 transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </motion.button>

      {/* Audio */}
      <audio ref={audioRef} src="/backgroundMusic.mp3" preload="auto"></audio>
    </div>
  );
}
