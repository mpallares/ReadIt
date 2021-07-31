import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyListPage from '../MyListPage/MyListPage';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import DashboardPage from '../DashboardPage/DashboardPage';

export const AppContext = React.createContext(null);

export default function Dashboard() {
  const [results, setResults] = useState([]);
  const [myList, setMyList] = useState([]);
  

  return (
    <Router>
      <AppContext.Provider value={{ results, setResults, myList, setMyList}}>
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
