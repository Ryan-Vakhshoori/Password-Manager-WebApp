import React from "react";
import Data from "../components/Data.js";
import { useParams, Link } from "react-router-dom";

function Passwords() {
  let { docID } = useParams();

  return (
    <div>
      <Link to="new-password">add new password</Link>
      <br />
      <Link to="delete-password">delete password</Link>
      <Data docID={docID}/>
    </div>
  );
}

export default Passwords;
