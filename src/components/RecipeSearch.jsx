import React, { Component } from 'react'
import { Image, Segment, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../actions';

const cuisineTypes = [
  { key: '1', text: 'None', value: null },
  { key: '2', text: 'American', value: 'American' },
  { key: '3', text: 'Chinese', value: 'Chinese' },
  { key: '4', text: 'Mexican', value: 'Mexican' },
  { key: '5', text: 'Italian', value: 'Italian' },
  { key: '6', text: 'Japanese', value: 'Japanese' },
  { key: '7', text: 'Greek', value: 'Greek' },
  { key: '8', text: 'French', value: 'French' },
  { key: '9', text: 'Thai', value: 'Thai' },
  { key: '10', text: 'Indian', value: 'Indian' },
  { key: '11', text: 'Mediterranean', value: 'Mediterranean' },
]

export class RecipeSearch extends Component {

  state = {
    cuisineType: null
  }

  handleCuisineOnChange = (e, { value }) => {
    this.setState({ cuisineType: value })
  }

  handleFoodTypeOnClick = (foodType) => {
    this.props.fetchRecipes(this.state.cuisineType, foodType);
  }

  render() {
    return (
      <Segment inverted attached>
        <div className="search-container">
          <div className="search">
            <Dropdown placeholder='Select Cuisine...' search selection options={cuisineTypes} onChange={this.handleCuisineOnChange} />
          </div>
          <div className="empty"> </div>
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
        </div>
      </Segment >
    )
  }
}

export default connect(null, { fetchRecipes })(RecipeSearch);


