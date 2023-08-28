import React from "react";

export default function Music() {
  return (
    <div className="music">
      <div className="subtext2 mt-1">Feels like...</div>
      <div className="headphones">
        <img
          src="https://www.freeiconspng.com/uploads/headphones-png-19.png"
          id="headphones"
          alt="Headphones pic"
          height="200"
          width="200"
        ></img>
      </div>
      <div>
        <iframe
          id="playlist"
          src="https://open.spotify.com/embed/playlist/6TzelL2zxRLsKm2d4YdhLR?utm_source=generator"
          width="70%"
          height="100"
          frameborder="0"
          allow="autoplay"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
