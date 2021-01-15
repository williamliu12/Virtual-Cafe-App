import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";



export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("Cafe");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Join
          </button>
        </Link>
      </div>
      <div className="watermark">
        Artwork: https://www.artstation.com/artwork/nQy5qK
      </div>
    </div>
  );
}
