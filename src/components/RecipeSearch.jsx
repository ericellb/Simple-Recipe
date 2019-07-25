import React, { Component } from 'react'
import { Image, Segment, Dropdown } from 'semantic-ui-react';

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


  testFunction = (e, { value }) => {
    console.log(value);
  }

  render() {
    return (
      <Segment inverted attached>
        <div className="search-container">
          <div className="search">
            <Dropdown placeholder='Select Cuisine...' search selection options={cuisineTypes} onChange={this.testFunction} />
          </div>
          <div className="empty"> </div>
          <div className="icons">
            <div className="icon-container">
              <Image src="/icons/chicken.png"></Image>
              <p className="horizontal-align"> Chicken </p>
            </div>
            <div className="icon-container">
              <Image src="/icons/beef.png"></Image>
              <p className="horizontal-align"> Beef </p>
            </div>
            <div className="icon-container">
              <Image src="/icons/pork.png"></Image>
              <p className="horizontal-align"> Pork </p>
            </div>
            <div className="icon-container">
              <Image src="/icons/fish.png"></Image>
              <p className="horizontal-align"> Fish </p>
            </div>
            <div className="icon-container">
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


