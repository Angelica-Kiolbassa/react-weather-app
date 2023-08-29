import React from "react";

export default function Music() {
  return (
    <div className="music">
      <div className="subtext2 mt-1">Feels like...</div>
      <div className="headphones mb-1">
        <img
          src="https://www.freeiconspng.com/uploads/headphones-png-19.png"
          id="headphones"
          alt="Headphones pic"
          height="175"
          width="175"
        ></img>
      </div>
      <div>
        <iframe
          id="playlist"
          src="https://open.spotify.com/embed/playlist/2IjwcPA9f07TeYSLijgNq6?utm_source=generator&theme=0"
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
