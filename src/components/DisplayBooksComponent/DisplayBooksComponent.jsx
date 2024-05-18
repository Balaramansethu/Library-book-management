import React, { useState } from "react";
import BookData from "../../data/BookData";
import './DisplayBooksComponent.css';

const DisplayBooksComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 10;

  const filteredBooks = BookData.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const lastIndex = currentPage * booksPerPage;
  const firstIndex = lastIndex - booksPerPage;
  const books = filteredBooks.slice(firstIndex, lastIndex);
  const totPage = Math.ceil(filteredBooks.length / booksPerPage);
  const numbers = [...Array(totPage + 1).keys()].slice(1);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== totPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="search-bar">
        <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      /></div>
      
    
    <div className="box-container">
      
      {books.map((data, index) => (
        <div className="card-container" key={index}>
          <img src={data.coverImage} alt="cover" />
          <p>Title : {data.title}</p>
          <p>Author : {data.author}</p>
          <p>Subject : {data.subject}</p>
          <p>Published date : {data.publish_date}</p>
        </div>
      ))}
      <footer>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={previousPage}>
                Previous
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" onClick={() => changeCPage(n)}>
                  {n}
                </a>
              </li>
            ))}
            <li>
              <a href="#" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
    </div>
  );
};

export default DisplayBooksComponent;
