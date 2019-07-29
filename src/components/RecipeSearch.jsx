import React, { Component } from 'react'
import { Image, Segment, Dropdown, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchRecipes, fetchDictionary } from '../actions';

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
  value: ''
}

export class RecipeSearch extends Component {

  state = initialState;

  componentDidMount = () => {
    this.props.fetchDictionary();
  }

  handleCuisineOnChange = (e, { value }) => {
    this.props.fetchRecipes(value, null);
  }

  handleFoodTypeOnClick = (foodType) => {
    this.props.fetchRecipes(null, foodType);
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    console.log(this.props.dictionary.dictionary);
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatchType = result => re.test(result.type);
      const isMatchTitle = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.dictionary.dictionary, (isMatchType || isMatchTitle)).slice(0, 4),
      })
    }, 300)
  }

  render() {
    return (
      <Segment inverted attached>
        <div className="search-container">
          <div className="search">
            <Dropdown placeholder='Select Cuisine...' search selection options={cuisineTypes} onChange={this.handleCuisineOnChange} />
          </div>
          <div className="icons">
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('chicken')}>
              <Image src="/icons/chicken.png"></Image>
              <p className="horizontal-align"> Chicken </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('beef')}>
              <Image src="/icons/beef.png"></Image>
              <p className="horizontal-align"> Beef </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('pork')}>
              <Image src="/icons/pork.png"></Image>
              <p className="horizontal-align"> Pork </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('fish')}>
              <Image src="/icons/fish.png"></Image>
              <p className="horizontal-align"> Fish </p>
            </div>
            <div className="icon-container" onClick={() => this.handleFoodTypeOnClick('vegetarian')}>
              <Image src="/icons/vegetable.png"></Image>
              <p className="horizontal-align"> Vegetarian </p>
            </div>
          </div>
          <div className="empty">
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
              {...this.props}
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

export default connect(mapStateToProps, { fetchRecipes, fetchDictionary })(RecipeSearch);


