import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Index = () => {
  return <div />;
};

export const About = () => {
  return <h2>About</h2>;
};

export const Users = () => {
  return <h2>Users</h2>;
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
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
};

// export default Index;
