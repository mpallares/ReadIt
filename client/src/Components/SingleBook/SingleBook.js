import React, { useContext } from 'react';
import './SingleBook.css';
import { AppContext } from '../Dashboard/Dashboard';

export default function SingleBook(props) {
  const { myList, setMyList } = useContext(AppContext);

  function handleClick(e) {
    if (!myList.includes(props.book)) {
      setMyList((prevValue) => {
        return [...prevValue, props.book];
      });
    } else {
      const newList = myList.filter(book => {
        return props.book.volumeInfo.title !== book.volumeInfo.title
      })
      setMyList(newList)
    }
  }

  return (
    <div className="single-book-container">
      <img className="book-cover" src={props.book.volumeInfo.imageLinks?.thumbnail}/>
      <div className="book-info">
        <h2>{props.book.volumeInfo.title.substring(0, 80) + '...'}</h2>
        <h3>{props.book.volumeInfo.author}</h3>
        <p>{props.book.volumeInfo.publishedDate}</p>
      </div>
      <button className="button-single-book" onClick={handleClick}>{myList.includes(props.book) ? 'Delete book' : 'Add to List'}</button>

    </div>
  );
}
