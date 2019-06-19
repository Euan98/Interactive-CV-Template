import React, { Component } from "react";
import "./mainPage.css";

import NavBar from "../navigationBar/navigationBar";
import ContentPanel from "../ContentPanel/contentPanel";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainPage">
        This area will be used to add all your HTML elements
      </div>
    );
  }
}

export default MainPage;
