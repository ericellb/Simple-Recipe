import React, { Component } from 'react';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';
import TitleSection from './TitleSection';
import Footer from './Footer';
import '../components/App.css';

import 'semantic-ui-less/semantic.less'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <TitleSection></TitleSection>
        <RecipeSearch></RecipeSearch>
        <RecipeList></RecipeList>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
