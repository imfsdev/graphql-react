import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import AllNotes from "./components/AllNotes";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";

function App() {
  return (
    <Router>
      <div>
        <nav
          className="navbar App-header"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              NotesQL
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              All Notes
            </Link>
            <Link to="/newnote" className="navbar-item">
              New Note
            </Link>
          </div>
        </nav>
        <Route exact path="/" component={AllNotes} />
        <Route path="/newnote" component={NewNote} />
        <Route path="/note/:id" component={EditNote} />
      </div>
    </Router>
  );
}

export default App;
