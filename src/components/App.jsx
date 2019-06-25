import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";

import RateExchangeList from "../containers/Rate-Exchange-List";
export default class App extends Component {
  render() {
    return <div>
              <h1>Rate Exchange - REDUX</h1>
              <SearchBar />
              <RateExchangeList />
          </div>;
  }
}
