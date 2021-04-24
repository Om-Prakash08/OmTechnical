import React from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
