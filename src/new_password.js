import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";

const Modal = () => {
  const [site, setSite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>add new password</button>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
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
        <button onClick={closeModal}>cancel</button>
      </ReactModal>
    </div>
  );
};

export default Modal;
