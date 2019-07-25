import React, { Component } from 'react'
import { Image, Segment, Dropdown, Grid, GridColumn } from 'semantic-ui-react';

const dropdownTestOptions = [
  {
    key: '1',
    text: 'American',
    value: 'American'
  },
  {
    key: '2',
    text: 'Mexican',
    value: 'Mexican'
  }
]

export class RecipeSearch extends Component {
  render() {
    return (
      <Segment inverted attached>
        <div class="search-container">
          <div class="search">
            <Dropdown placeholder='Cuisine Type...' search selection options={dropdownTestOptions} />
          </div>
          <div class="empty"> </div>
          <div class="icons">
            <div class="icon-container">
              <Image src="/icons/chicken.png"></Image>
              <p className="horizontal-align"> Chicken </p>
            </div>
            <div class="icon-container">
              <Image src="/icons/beef.png"></Image>
              <p className="horizontal-align"> Beef </p>
            </div>
            <div class="icon-container">
              <Image src="/icons/pork.png"></Image>
              <p className="horizontal-align"> Pork </p>
            </div>
            <div class="icon-container">
              <Image src="/icons/fish.png"></Image>
              <p className="horizontal-align"> Fish </p>
            </div>
            <div class="icon-container">
              <Image src="/icons/vegetable.png"></Image>
              <p className="horizontal-align"> Vegetarian </p>
            </div>
          </div>
        </div>
      </Segment >
    )
  }
}

export default RecipeSearch


