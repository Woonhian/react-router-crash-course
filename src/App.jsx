import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
