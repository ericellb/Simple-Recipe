import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';
import TitleSection from './TitleSection';
import Footer from './Footer';
import '../components/App.css';

import 'semantic-ui-less/semantic.less'
import RecipeSubmit from './RecipeSubmit';
import RecipeAdmin from './RecipeAdmin';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Router history={createBrowserHistory()}>
          <Header></Header>
          <TitleSection></TitleSection>
          <RecipeSearch></RecipeSearch>
          <Footer></Footer>
          <Route path="/recipe/submit" exact component={RecipeSubmit} />
          <Route path="/" exact component={RecipeList} />
          <Route path="/admin" exact component={RecipeAdmin} />
        </Router>
      </div>
    )
  }
}

export default App;
