import React from "react";

import Sidebar from '../../components/SideBar';
import Feed from '../../components/Feed'

import "./styles.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <h1>Deus é mais</h1>
    </div>
  );
};

export default Home;

