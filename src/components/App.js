import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} />
    </div>
  );
}

export default App;
