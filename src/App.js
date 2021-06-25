import React from "react";
import "./App.css";
//import Home from "./modules/home";
//import Assignment from "./modules/assignment1";
//import Assignment2 from "./modules/assignment2";
//import Assignment3 from "./modules/assignment3";
//import Assignment4 from "./modules/assignment4";
//import Assignment5 from "./modules/assignment5";
//import MovieTemplate from "./modules/MovieTemplate";
//import LogicalAbility from "./modules/Logical_Ability";
//import LifeCycleMethods from "./modules/lifeCycleMethods";
//import ReactRouting from "./modules/ReactRouting";
import ReactRedux from "./modules/ReactRedux";
class App extends React.Component {
  render() {
    return (
      <div className={`App`}>
        {/* <Home />
        <Assignment/> 
        <Assignment2/>
        <Assignment3/>
        <Assignment4/>
        <Assignment5 />
        <MovieTemplate />
        <LogicalAbility />
        <LifeCycleMethods />
        <ReactRouting /> */}
        <ReactRedux />
      </div>
    );
  }
}

export default App;
