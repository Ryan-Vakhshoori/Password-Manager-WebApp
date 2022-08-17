import React from "react";
import { Popup as ReactPopup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

const Popup = () => {
  const [site, setSite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ReactPopup
      trigger={<button>add new password</button>}
      modal
    >
      <form>
        <label>
          Site
          <input
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </ReactPopup>
  );
};

export default Popup;
