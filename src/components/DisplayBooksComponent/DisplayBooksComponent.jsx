import React, { useState } from "react";
import BookData from "../../data/BookData";

const DisplayBooksComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const LastIndex = currentPage * booksPerPage;
  const firstIndex = LastIndex - booksPerPage;
  const books = BookData.slice(firstIndex, LastIndex);
  const totPage = Math.ceil(BookData.length / booksPerPage);
  const numbers = [...Array(totPage + 1).keys()].slice(1);

  function previousPage(){
    if(currentPage!== 1){
        setCurrentPage(currentPage-1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage!== totPage)
        {
            setCurrentPage(currentPage+1)
        }
  }

  return (
    <div className="box-container">
      {books.map((data, index) => (
        <div className="card-container">
          <p key={index}>Title : {data.title}</p>
          <p key={index}>Author : {data.author}</p>
          <p key={index}>Subject : {data.subject}</p>
          <p key={index}>Published date : {data.publish_date}</p>
        </div>
      ))}
      <footer>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={previousPage}>
                {" "}
                Previous
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-item" onClick={()=>changeCPage(n)}>
                  {n}
                </a>
              </li>
            ))}

            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default DisplayBooksComponent;
