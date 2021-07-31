import React, { useState, useContext } from 'react';
import { AppContext } from '../Dashboard/Dashboard';
import Api from '../../Services/Api';
import './SearchForm.css';

export default function SearchForm(props) {
  const [book, setBook] = useState('');
  const [sort, setSort] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    if(!book) return
    props.setIsLoading(true);
    Api.getBooks(book).then((data) => {
      props.setResults(data.items);
      props.setIsLoading(false);
    });
  }

  function handleSort (e) {
    setSort(e.target.value)
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
        <select defaultValue="Sort" onChange={handleSort}>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}
