import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import History from "./components/History";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const addToHistory = (book) => {
    const updatedHistory = [book, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  return (
    <div className="App">
      <h1>Buscador de libros PWA</h1>
      <SearchBar setBooks={setBooks} addToHistory={addToHistory} />
      <History history={history} />
      <BookList books={books} />
    </div>
  );
}

export default App;
