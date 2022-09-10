import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Navigate,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";
class routerApp extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Routes></Routes>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(routerApp);
