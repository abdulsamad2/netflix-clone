import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
