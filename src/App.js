import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./request";
import Footer from "./Footer";
import { Divider } from "@material-ui/core";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
      <Divider light="true" />
      <Footer />
    </div>
  );
}

export default App;
