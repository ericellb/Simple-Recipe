import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
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
        <HashRouter>
          <Header></Header>
          <Route path="/" exact component={RecipeList} />
          <Route path="/submit" exact component={RecipeSubmit} />
          <Route path="/admin" exact component={AdminPanel} />
          <Footer></Footer>
        </HashRouter>
      </div>
    )
  }
}

export default App;
