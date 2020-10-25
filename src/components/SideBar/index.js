import React from "react";

import "./styles.css";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatItcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ViodeoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import SidebarRow from './components/SidebarRow';

// import { useStateValue } from '../StateProvider'

function SideBar() {
  // const [{user}, displatch] = useStateValue()
  return (
    <div className="sidebar">
      <SidebarRow src="https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4" title="Luiz Carlos" />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatItcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={ViodeoLibraryIcon} title="Vídeos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />

      <SidebarRow src="" title="Developer @carlosvilelal" />
    </div>
  );
}

export default SideBar;
