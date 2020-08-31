import React from "react";
import "./HomePage.css";

import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">Sobre Google</Link>
          <Link to="/store">Tienda</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Imágenes</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          className="home__bodyImg"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Brand Google"
        />
        {/* <MicIcon />
        <SearchIcon /> */}
      </div>
    </div>
  );
};
