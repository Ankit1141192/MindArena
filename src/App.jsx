import React, { useState } from "react";
import BlockPuzzleGame from "./BlockPuzzleGame";
import FlappyBird from "./components/FlappyBird";
import WordSearchGame from "./components/WordSearchGame";

function App() {
  const [game, setGame] = useState("flappy");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="flex gap-4 mb-6">
        <button onClick={() => setGame("flappy")} className="px-4 py-2 bg-blue-500 text-white rounded">Flappy Bird</button>
        <button onClick={() => setGame("block")} className="px-4 py-2 bg-green-500 text-white rounded">Block Puzzle</button>
        <button onClick={() => setGame("word")} className="px-4 py-2 bg-purple-500 text-white rounded">Word Search</button>
      </div>

      {game === "flappy" && <FlappyBird />}
      {game === "block" && <BlockPuzzleGame />}
      {game === "word" && <WordSearchGame />}
    </div>
  );
}

export default App;
