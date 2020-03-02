import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { BottomNavigationActionn, Linka } from "./style.js";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import SearchIcon from "@material-ui/icons/Search";

function Menu() {
  const [value, setValue] = React.useState("recents");
  let history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function changeroute(route) {
    history.push(`${route}`);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className="root"
    >
      <BottomNavigationActionn
        label="Início"
        value="home"
        onClick={() => changeroute("/")}
        icon={<HomeIcon />}
      />

      <BottomNavigationActionn
        label="Quiz"
        value="quiz"
        onClick={() => changeroute("/quiz")}
        icon={<SchoolIcon />}
      />

      <BottomNavigationActionn
        label="Sobre"
        value="about"
        onClick={() => changeroute("/about")}
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}

export default Menu;
