import React, { useContext, useState } from 'react';
import { AppContext } from '../Dashboard/Dashboard';
import SearchForm from '../SearchForm/SearchForm';
import BooksList from '../BooksList/BooksList';
import Spinner from '../Spinner/Spinner';

export default function DashboardPage() {
  const { results, setResults } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <SearchForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        list={results}
        setResults={setResults}
        results={results}
      />
      {isLoading ? <Spinner /> : <BooksList list={results} />}
    </div>
  );
}
