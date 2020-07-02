import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Dogs from "./Dogs";
import Cats from "./Cats";
import Rabbits from "./Rabbits";

const Blog = () => {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/dogs`}>Dogs</Link>
        </li>
        <li>
          <Link to={`${url}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${url}/rabbits`}>Rabbits</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/dogs`}>
          <Dogs />
        </Route>
        <Route path={`${path}/cats`}>
          <Cats />
        </Route>
        <Route path={`${path}/rabbits`}>
          <Rabbits />
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;
