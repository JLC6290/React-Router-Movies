import React, { useState } from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  // const { id } = useParams();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  console.log(savedList);

  return (
    <div>
      <BrowserRouter>
        <SavedList list={savedList} />
        <Route path='/' component={MovieList} />
        <Route path='/movies/:id' render={props => {
          const { id } = props.match.params;
          return <Movie />
        }} />
      </BrowserRouter>
    </div>
  );
};

export default App;
