import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row
        title='upcoming'
        fetchURL={requests.requestUpcoming}
      />
      <Row
        title='Popular'
        fetchURL={requests.requestPopular}
      />
      <Row
        title='Trending'
        fetchURL={requests.requestTrending}
      />
    
    </div>
  );
};

export default Home;
