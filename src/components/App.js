import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from '../history';

import Header from './Header';
import TitleSection from './TitleSection';
import SearchBar from './SearchBar';
import RecipeList from './recipe/RecipeList';
import RecipeSubmit from './recipe/RecipeSubmit';
import AdminPanel from './admin/AdminPanel';
import Footer from './Footer';
import './App.css';

import 'semantic-ui-less/semantic.less'
class App extends Component {

  render() {
    return (
      <div className="app">
        <Router history={createBrowserHistory}>
          <Header></Header>
          <TitleSection></TitleSection>
          <SearchBar></SearchBar>
          <Footer></Footer>
          <Route path="/recipe/submit" exact component={RecipeSubmit} />
          <Route path="/" exact component={RecipeList} />
          <Route path="/admin" exact component={AdminPanel} />
        </Router>
      </div>
    )
  }
}

export default App;
