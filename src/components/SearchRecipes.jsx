import React, { Component } from 'react'
import { Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import createHashHistory from '../history';

import { fetchRecipe, fetchRecipes, fetchDictionary } from '../actions';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
  id: null,
}

export class SearchRecipes extends Component {

  state = initialState;

  componentDidMount = () => {
    this.props.fetchDictionary();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.id !== this.state.id) {
      if (this.state.id !== null)
        this.props.fetchRecipe(this.state.id);
    }
  }

  handleSearchSelect = (e, { result }) => {
    if (createHashHistory.location.hash !== '/')
      createHashHistory.push('/');
    this.setState({ id: result._id });
    this.setState({ foodFilter: null });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatchTitle = result => re.test(result.title);
      const isMatchType = result => re.test(result.type);
      const isMatchDescription = result => re.test(result.description);

      // Check our results
      // Prioritize title => type => desc
      let results = _.filter(this.props.dictionary.dictionary, isMatchTitle).slice(0, 4);
      if (results <= 0)
        results = _.filter(this.props.dictionary.dictionary, isMatchType).slice(0, 4);
      if (results <= 0)
        results = _.filter(this.props.dictionary.dictionary, isMatchDescription).slice(0, 4);

      this.setState({
        isLoading: false,
        results: results,
      })
    }, 300)
  }

  render() {
    return (
      <Search
        className="recipe-search-bar"
        placeholder="Search recipes..."
        aligned="left"
        loading={this.state.isLoading}
        onResultSelect={this.handleSearchSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={this.state.results}
        value={this.state.value}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary
  }
}

export default connect(mapStateToProps, { fetchRecipes, fetchRecipe, fetchDictionary })(SearchRecipes);


