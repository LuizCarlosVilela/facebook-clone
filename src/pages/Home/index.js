import React from "react";

import Sidebar from '../../components/SideBar';
import Feed from '../../components/Feed';
import Widget from '../../components/Widget';

import "./styles.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default Home;

