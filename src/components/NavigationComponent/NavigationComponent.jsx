import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import DisplayBooksComponent from "../DisplayBooksComponent/DisplayBooksComponent";
import BookGenreComponent from "../BookGenreComponent/BookGenreComponent";
const NavigationComponent = () => {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/BookGenre"></Link>
      </ul>
      <Routes>
        <Route exact path="/" element={<DisplayBooksComponent/>}/>
        <Route exact path="/BookGenre" element={<BookGenreComponent/>}/>
      </Routes>
    </Router>
  );
};

export default NavigationComponent;
