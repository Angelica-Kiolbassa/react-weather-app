import React from "react";

export default function Music() {
  return (
    <div class="justify-content-xl ">
      <div className="music">
        <div className="container d-flex justify-content-center">
          <div className="headphones mt-3 mb-3">
            <img
              src="https://www.freeiconspng.com/uploads/headphones-png-19.png"
              id="headphones"
              alt="Headphones pic"
              height="150"
              width="150"
            ></img>
          </div>
        </div>
        <div className="container d-flex justify-content-center mb-2">
          <iframe
            id="playlist"
            src="https://open.spotify.com/embed/playlist/5yhDpMnRyOVZiMaozN0ofc?utm_source=generator"
            max-width="60"
            height="80"
            allow="autoplay"
            autoplay="play"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
