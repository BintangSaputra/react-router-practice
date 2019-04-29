import React from "react";

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
              <Link to="">Users</Link>
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
