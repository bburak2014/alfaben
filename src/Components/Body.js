import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./UserCard";
import { Row } from "react-bootstrap";
import axios from "axios";
import Animation from "./animation";

function Body() {
  const [data, setdata] = useState([]);
  const [animation, setanimation] = useState(true);

  const getUser = () =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setdata(res.data);
    });
  useEffect(() => {
    setTimeout(() => {
      getUser();
      setanimation(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className={animation ? "animationShow" : "animationHide"}>
        <Animation />
      </div>

      <Row className="RowHght   p-1">
        {data.map((item, key) => (
          <UserCard getuser={data} setuser={setdata} key={key} item={item} />
        ))}
      </Row>
    </>
  );
}

export default Body;
