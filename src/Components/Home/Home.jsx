import React from "react";
import "./Home.css";
import Card from "./Card";

const Home = ({ data }) => {
  return (
    <div className="home">
      <div className="card_warpper">
        {data?.map((item, index) => {
          return (
            <Card
              img={item.urlToImage}
              title={item.title}
              description={item.description}
              url={item.url}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
