import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import "./App.css";

const ApiKey = `53248229969e4694a8169ceca1a18126`;

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");
  const [loader,setLoader] = useState(false)
  const fetchData = async () => {
    const newsppaer_url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${ApiKey}`;
    setLoader(true)
    await fetch(newsppaer_url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles)
        setLoader(false)
      })
      .catch((err) =>{
         console.log(err)
         setLoader(true)
        });
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div>
      <Navbar setCategory={setCategory} />
      {
        loader ? <div className="loader">
          <h1>Please waiting...</h1>
          </div>:<Home data={data} />
      }
    </div>
  );
};

export default App;
