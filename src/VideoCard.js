import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      />
      <TextTruncate
        line={1}
        text={movie.overview}
        element="p"
        truncateText="..."
      />
      <h3>{movie.title || movie.original_name}</h3>
      <p className="videoCard__stats">
        <p className="videoCard__mediaType">{movie.media_type}</p>
        {movie.release_date || movie.first_air_date} <ThumbUpSharp />{" "}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
