import React, { Component } from 'react'
import { Image, Segment, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../actions';

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

export class RecipeSearch extends Component {

  handleCuisineOnChange = (e, { value }) => {
    this.props.fetchRecipes(value, null);
  }

  handleFoodTypeOnClick = (foodType) => {
    this.props.fetchRecipes(null, foodType);
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


