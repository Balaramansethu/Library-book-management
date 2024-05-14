import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import DisplayBooksComponent from "../DisplayBooksComponent/DisplayBooksComponent";
import BookGenreComponent from "../BookGenreComponent/BookGenreComponent";
const NavigationComponent = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/BookGenre">Book genre</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<DisplayBooksComponent />} />
        <Route exact path="/BookGenre" element={<BookGenreComponent />} />
      </Routes>
    </Router>
  );
};

export default NavigationComponent;
