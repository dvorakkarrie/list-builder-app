import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

export default () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8080/lists`,
    }).then((res) => {
      setLists(res.data);
      setLoading(false);
    });
  }, [setLists]);

  return (
    <div>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          {lists.map((list) => (
            <div>{list.title}</div>
          ))}
        </>
      )}
    </div>
  );
};
