import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
export class sidebar extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Menu isOpen={true} noOverlay>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="product" className="menu-item" href="/Product">
            Product
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </>
    );
  }
}

export default sidebar;
