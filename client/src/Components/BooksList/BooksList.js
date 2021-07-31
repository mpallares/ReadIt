import React, { useContext } from 'react';
import './BooksList.css';
import SingleBook from '../SingleBook/SingleBook';
import { AppContext } from '../Dashboard/Dashboard';

export default function BooksList(props) {
  return (
    <div className="container-list">
      {props.list.map((book) => {
        return <SingleBook book={book} key={book.id} />;
      })}
    </div>
  );
}
