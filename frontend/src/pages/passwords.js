import React from "react";
import Modal from "../components/Modal.js";
import Table from "../components/Table.js";
import { useParams } from "react-router-dom";

function Passwords() {
  let { docID } = useParams();

  return (
    <div>
      <Modal docID={docID}/>
      <Table docID={docID}/>
    </div>
  );
}

export default Passwords;
