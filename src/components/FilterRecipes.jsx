import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import createHashHistory from '../history';

import { fetchRecipes } from '../actions';

const cuisineTypes = [
  { key: '1', text: 'None', value: null },
  { key: '2', text: 'Chicken', value: 'chicken' },
  { key: '3', text: 'Beef', value: 'beef' },
  { key: '4', text: 'Pork', value: 'pork' },
  { key: '5', text: 'Fish', value: 'fish' },
  { key: '6', text: 'Vegetarian', value: 'vegetarian' },
  { key: '7', text: 'American', value: 'american' },
  { key: '8', text: 'Chinese', value: 'chinese' },
  { key: '9', text: 'Mexican', value: 'mexican' },
  { key: '10', text: 'Italian', value: 'italian' },
  { key: '11', text: 'Japanese', value: 'japanese' },
  { key: '12', text: 'Greek', value: 'greek' },
  { key: '13', text: 'French', value: 'french' },
  { key: '14', text: 'Thai', value: 'thai' },
  { key: '15', text: 'Indian', value: 'indian' },
]

export class FilterRecipes extends Component {

  state = {
    foodFilter: null
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.foodFilter !== this.state.foodFilter) {
      if (this.state.foodType !== null)
        this.props.fetchRecipes(this.state.foodFilter, null, true)
    }
  }

  handleFilterByChange = (e, { value }) => {
    if (createHashHistory.location.hash !== '/')
      createHashHistory.push('/');
    this.setState({ foodFilter: value });
    this.setState({ id: null });
  }

  render() {
    return (
      <Dropdown placeholder='Filter by...' search selection options={cuisineTypes} onChange={this.handleFilterByChange} />
    )
  }
}

export default connect(null, { fetchRecipes })(FilterRecipes);

