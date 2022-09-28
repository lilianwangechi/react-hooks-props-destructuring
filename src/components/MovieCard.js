import React from "react";

//without destructuring
// function MovieCard(props){
//   return ( 
//     <div className="movie-card">
//       <img src={props.posterSrc} alt={props.title} />
//       <h2>{props.title}</h2>
//       <small>{props.genres.join(", ")}</small>
//     </div>
//   );
// }

//with destructuring
function MovieCard({
title,
genres,
posterSrc =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM",
}){
  return ( 
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;