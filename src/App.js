import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import World from "./components/World";
import India from "./components/India";
import Search from "./components/Search";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
  const [fullcountries, setfullcountries] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries/India"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((res) => {
        setPosts(res[0].data);
        setPosts1(res[1].data);
        setfullcountries(res[2].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h2>Covid-19 Dashboard</h2>
      <World posts={posts} />
      <India posts1={posts1} />
      <Search fullcountries={fullcountries} />
    </div>
  );
};

export default App;
