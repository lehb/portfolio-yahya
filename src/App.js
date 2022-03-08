import React from "react";
import "./App.css";
import "./index.css";
import { Header, Services } from "./containers";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <Header />
        <Services />
      </div>
    </div>
  );
};

export default App;
