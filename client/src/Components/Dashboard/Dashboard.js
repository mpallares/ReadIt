import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyListPage from '../MyListPage/MyListPage';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import DashboardPage from '../DashboardPage/DashboardPage';

export const AppContext = React.createContext(null);

// SERVER
// DB table Books
// GET /books/liked    POST /books/myList    PUT books/myList

// CLIENT
// save a book on AddToList click
// dislike a book on DeleteToList click
// Update myList page to fetch from server
// Update search page to

export default function Dashboard() {
  const [unSortedResults, setResults] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [myList, setMyList] = useState([]);

  console.log(unSortedResults);

  const results = [...unSortedResults].sort((a, b) => {
    if (sortOrder === 'Oldest') {
      return (
        parseInt(b.volumeInfo.publishedDate?.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate?.substring(0, 4))
      );
    } else if (sortOrder === 'Newest') {
      return (
        parseInt(a.volumeInfo.publishedDate?.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate?.substring(0, 4))
      );
    }
  });

  return (
    <Router>
      <AppContext.Provider
        value={{
          unSortedResults,
          setResults,
          myList,
          setMyList,
          sortOrder,
          setSortOrder,
          results,
        }}
      >
        <div className="main-container">
          <NavBar />
          <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/mylist" component={MyListPage} />
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}
