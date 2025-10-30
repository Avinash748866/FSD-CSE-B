import React from "react";
import Book from "./component/book.jsx";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import "./App.css";


const App = () => {
  return (
    <div>
    
  <header />
    <div className="booklist">
      {
        data.map((b,i)=>{
          <Book key={i} book={b} />
        }
        )
      }
      
      <Book />
      <Book />
      <Book />
      
    </div>
    </div>
  );
};