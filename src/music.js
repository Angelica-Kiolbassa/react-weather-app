import React from "react";

export default function Music() {
  return (
    <div class="justify-content-xl ">
      <div className="music">
        <div className="subtext2 mt-1 ms-4 ">Sounds like...</div>
        <div className="headphones mt-2 mb-3 ms-4 ">
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
            width="35%"
            height="85"
            allow="autoplay"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
