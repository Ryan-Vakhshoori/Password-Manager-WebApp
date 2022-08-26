import axios from "axios";
import React, { useEffect, useState } from "react";

function Data(props) {
  const [isLoading, setLoading] = useState(true);
  const [passwords, setPasswords] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/passwords/get-passwords", {
        params: {
          docID: props.docID,
        },
      })
      .then(function (response) {
        setPasswords(order(response.data));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.docID]);

  function order(arr) {
    const orderedArr = [];
    arr.forEach((element) => {
      const temp = {
        "site": element["site"],
        "username": element["username"],
        "password": element["password"],
      };
      orderedArr.push(temp);
    });
    return orderedArr;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(passwords, null, 2)}</pre>
    </div>
  );
}

export default Data;
