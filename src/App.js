import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import Result from "./pages/Result";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/pay" component={Pay} />
      <Route exact path="/result" component={Result} />
    </Router>
  );
}
