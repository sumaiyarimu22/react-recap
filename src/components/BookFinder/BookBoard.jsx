import Booklist from "./Booklist";
import Header from "./Header";
import booksData from "../../db/data";
import { useState } from "react";

const BookBoard = () => {
  const [books, setBooks] = useState(booksData);
  const handleSearch = (query) => {
    const filteredItems = books.filter(
      (book) => book.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setBooks(filteredItems);
  };

  const handleFavorite = (favouriteId) => {
    setBooks(
      books.map((book) => {
        if (book.id === favouriteId) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      })
    );
  };

  const handleAscSort = () => {
    const sortedBooks = [...books].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setBooks(sortedBooks);
  };
  const handleDescSort = () => {
    const sortedBooks = [...books].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setBooks(sortedBooks);
  };
  const handleYearAsc = () => {
    const sortedBooks = [...books].sort((a, b) => a.year - b.year);
    setBooks(sortedBooks);
  };

  const handleYearDesc = () => {
    const sortedBooks = [...books].sort((a, b) => b.year - a.year);
    setBooks(sortedBooks);
  };

  return (
    <main className='my-10 lg:my-14'>
      <Header
        handleSearch={handleSearch}
        handleAscSort={handleAscSort}
        handleDescSort={handleDescSort}
        handleYearAsc={handleYearAsc}
        handleYearDesc={handleYearDesc}
      />
      <Booklist books={books} handleFavorite={handleFavorite} />
    </main>
  );
};

export default BookBoard;
