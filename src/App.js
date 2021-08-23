import "./App.css";
import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //Fetch 120 contacts from url.
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=120")
      .then((Response) => {
        if (Response.data) {
          setUsers(Response.data.results);
        } else {
          console.log("not found");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-container">
      <div className="header">
        <h1>Valtech contact list</h1>
      </div>
      <Tabs Users={Users} />
    </div>
  );
}

export default App;
