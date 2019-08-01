import React, { Component } from 'react'
import { Image, Segment, Dropdown, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import createHashHistory from '../history';

import { fetchRecipe, fetchRecipes, fetchDictionary } from '../actions';

const cuisineTypes = [
  { key: '1', text: 'None', value: null },
  { key: '2', text: 'American', value: 'american' },
  { key: '3', text: 'Chinese', value: 'chinese' },
  { key: '4', text: 'Mexican', value: 'mexican' },
  { key: '5', text: 'Italian', value: 'italian' },
  { key: '6', text: 'Japanese', value: 'japanese' },
  { key: '7', text: 'Greek', value: 'greek' },
  { key: '8', text: 'French', value: 'french' },
  { key: '9', text: 'Thai', value: 'thai' },
  { key: '10', text: 'Indian', value: 'indian' },
]

const initialState = {
  isLoading: false,
  results: [],
  value: '',
  id: null,
  cuisineType: null,
  foodType: null
}

export class SearchBar extends Component {

  state = initialState;

  componentDidMount = () => {
    this.props.fetchDictionary();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.id !== this.state.id) {
      if (this.state.id !== null)
        this.props.fetchRecipe(this.state.id);
    }
    if (prevState.cuisineType !== this.state.cuisineType) {
      if (this.state.cuisineType !== null)
        this.props.fetchRecipes(this.state.cuisineType, null);
    }
    if (prevState.foodType !== this.state.foodType) {
      if (this.state.foodType !== null)
        this.props.fetchRecipes(null, this.state.foodType)
    }
  }

  handleCuisineOnChange = (e, { value }) => {
    if (createHashHistory.location.hash !== '/')
      createHashHistory.push('/');
    this.setState({ cuisineType: value });
    this.setState({ foodType: null });
    this.setState({ id: null });
  }

  handleFoodTypeOnClick = (value) => {
    if (createHashHistory.location.hash !== '/')
      createHashHistory.push('/');
    this.setState({ foodType: value });
    this.setState({ cuisineType: null });
    this.setState({ id: null });
  }

  handleResultSelect = (e, { result }) => {
    if (createHashHistory.location.hash !== '/')
      createHashHistory.push('/');
    this.setState({ id: result._id });
    this.setState({ foodType: null });
    this.setState({ cuisineType: null });
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
      <Segment inverted attached>
        <div className="search-container">
          <div className="search-cuisine">
            <Dropdown placeholder='Select Cuisine...' search selection options={cuisineTypes} onChange={this.handleCuisineOnChange} />
          </div>
          <div className="icons">
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('chicken')}>
              <Image src="icons/chicken.png"></Image>
              <p className="horizontal-align"> Chicken </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('beef')}>
              <Image src="icons/beef.png"></Image>
              <p className="horizontal-align"> Beef </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('pork')}>
              <Image src="icons/pork.png"></Image>
              <p className="horizontal-align"> Pork </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('fish')}>
              <Image src="icons/fish.png"></Image>
              <p className="horizontal-align"> Fish </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('vegetarian')}>
              <Image src="icons/vegetable.png"></Image>
              <p className="horizontal-align"> Vegetarian </p>
            </div>
          </div>
          <div className="search-recipe">
            <Search
              placeholder="Search recipes..."
              aligned="right"
              loading={this.state.isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={this.state.results}
              value={this.state.value}
            />
          </div>
        </div>
      </Segment >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary
  }
}

export default connect(mapStateToProps, { fetchRecipes, fetchRecipe, fetchDictionary })(SearchBar);


