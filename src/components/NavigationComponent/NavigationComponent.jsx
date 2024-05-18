import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import DisplayBooksComponent from "../DisplayBooksComponent/DisplayBooksComponent";
import BookGenreComponent from "../BookGenreComponent/BookGenreComponent";
import '../NavigationComponent/NavigationComponent.css'

const NavigationComponent = () => {
  return (
    <Router>
      <div className="navigation-container">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link">Home</Link>
          </li>
          <li className="navigation-item">
            <Link to="/BookGenre" className="navigation-link">Book genre</Link>
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
