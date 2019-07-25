import React, { Component } from 'react';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';
import TitleSection from './TitleSection';
import '../components/App.css';

import 'semantic-ui-less/semantic.less'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <TitleSection></TitleSection>
        <RecipeSearch></RecipeSearch>
        <RecipeList></RecipeList>
      </div>
    )
  }
}

export default App;
