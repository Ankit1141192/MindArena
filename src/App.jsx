import React, { useState } from "react";
import BlockPuzzleGame from "./BlockPuzzleGame";
import FlappyBird from "./components/FlappyBird";
import WordSearchGame from "./components/WordSearchGame";

function App() {
  const [game, setGame] = useState("flappy");

  return (
    <div className="w-screen h-screen flex flex-col bg-white ">
      {/* Top Button Bar */}
      <div className="flex justify-center gap-4 p-4 bg-gray-100 shadow-md">
        <button
          onClick={() => setGame("flappy")}
          className={`px-4 py-2 rounded ${
            game === "flappy" ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
          }`}
        >
          Flappy Bird
        </button>
        <button
          onClick={() => setGame("block")}
          className={`px-4 py-2 rounded ${
            game === "block" ? "bg-green-600 text-white" : "bg-green-500 text-white"
          }`}
        >
          Block Puzzle
        </button>
        <button
          onClick={() => setGame("word")}
          className={`px-4 py-2 rounded ${
            game === "word" ? "bg-purple-600 text-white" : "bg-purple-500 text-white"
          }`}
        >
          Word Search
        </button>
      </div>

      {/* Game Container (fills the rest of screen) */}
      <div className="flex-1 flex items-center justify-center overflow-auto bg-white">
        {game === "flappy" && <FlappyBird />}
        {game === "block" && <BlockPuzzleGame />}
        {game === "word" && <WordSearchGame className = "mb-20"/>}
      </div>
    </div>
  );
}

export default App;
