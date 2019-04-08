import React from "react";

import Router from "./Router"


import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faRssSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import conf from "@this/conf/conf"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

library.add(faHome, faRssSquare, faExternalLinkAlt);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    window.prerenderReady = true;
  }

  render() {
    return (
      <Router>
        
      </Router>
    )
  }
};

export default App;