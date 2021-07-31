import React, { useState, useContext } from 'react';
import { AppContext } from '../Dashboard/Dashboard';
import Api from '../../Services/Api';
import './SearchForm.css';

export default function SearchForm(props) {
  const [book, setBook] = useState('');
  const [sortedBooks, setSortedBooks] = useState('');
  console.log(props.results);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!book) return;
    props.setIsLoading(true);
    Api.getBooks(book).then((data) => {
      props.setResults(data.items);
      props.setIsLoading(false);
    });
  }

  function handleSort(e) {
    e.preventDefault();
    setSortedBooks(e.target.value);
    console.log(sortedBooks);
    const sortBooks = props.results.sort((a, b) => {
      console.log(b.volumeInfo.publishedDate);
      if (sortedBooks === 'Newest') {
        return (
          parseInt(b.volumeInfo.publishedDate?.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate?.substring(0, 4))
        );
      } else if (sortedBooks === 'Oldest') {
        return (
          parseInt(a.volumeInfo.publishedDate?.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate?.substring(0, 4))
        );
      }
    });
    props.setResults(sortBooks);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="container-form">
        <input
          className="search-term"
          type="text"
          placeholder="Search for a book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button type="submit" className="form-button">
          <i className="icon" className="fa fa-search" aria-hidden="true"></i>
        </button>
        <select onChange={handleSort}>
          <option defaultValue="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}
