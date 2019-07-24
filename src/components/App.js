import React, { Component } from 'react';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <RecipeSearch></RecipeSearch>
        <RecipeList></RecipeList>
      </div>
    )
  }
}

export default App;
