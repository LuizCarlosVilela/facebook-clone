import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";

import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervidesUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar, IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="Facebook Logo"
        />
      </div>

      <div className="header_input">
        <SearchIcon />
        <input placeholder="Pesquisa Facebook" type="text" />
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontsize="large" />
        </div>

        <div className="header_option">
          <FlagIcon fontsize="large" />
        </div>

        <div className="header_option">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>

        <div className="header_option">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>

        <div className="header_option">
          <SupervidesUserCircleIcon fontsize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>Luiz Carlos</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
