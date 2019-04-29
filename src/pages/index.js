import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./about";
import Users from "./users";
import GitHub from "./github";
export const Index = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/github">GitHub</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={Form} />
        <Route path="/users" component={Users} />
        <Route path="/github" component={GitHub} />
      </div>
    </Router>
  );
};

// export default Index;
