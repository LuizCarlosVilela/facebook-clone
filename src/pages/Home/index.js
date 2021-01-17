import React from "react";

import Sidebar from '../../components/SideBar';
import Feed from '../../components/Feed'

import "./styles.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default Home;

