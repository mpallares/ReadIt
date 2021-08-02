import React, { useContext, useState } from 'react';
import './SingleBook.css';
import { AppContext } from '../Dashboard/Dashboard';
import Modal from '../Modal/Modal';
import StarRating from '../StarRating/StarRating'
// import Modal from 'react-modal'

export default function SingleBook(props) {
  const { myList, setMyList } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal((prevValue) => !prevValue);
  }
  async function handleClick(e) {
    if (!myList.includes(props.book)) {
      setMyList((prevValue) => {
        return [...prevValue, props.book];
      });

      // const {id} = props.book

      // await fetch('http://')
    } else {
      const newList = myList.filter((book) => {
        return props.book.volumeInfo.title !== book.volumeInfo.title;
      });
      setMyList(newList);
    }
  }

  return (
    <div className="single-book-container">
      <img
        className="book-cover"
        src={props.book.volumeInfo.imageLinks?.thumbnail}
      />
      <div className="book-info">
        <h2>{props.book.volumeInfo.title.substring(0, 80) + '...'}</h2>
        <h3>{props.book.volumeInfo.author}</h3>
        <p>{props.book.volumeInfo.publishedDate}</p>
      </div>
      <StarRating/>
      <div className="button-container">
        <button className="button-single-book" onClick={handleClick}>
          {myList.includes(props.book) ? 'Delete book' : 'Add to List'}
        </button>
        <button className="button-single-book" onClick={openModal}>
          Read more
        </button>
      </div>
      {showModal ? (
        <Modal
          openModal={openModal}
          book={props.book}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
}
