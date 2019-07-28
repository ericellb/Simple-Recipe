import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';



export class Header extends Component {

  render() {
    return (
      <Menu size="large" attached inverted borderless>
        <Menu.Item>Simple Recipe</Menu.Item>
        <Menu.Item position="right">
          <Input action={{ color: 'teal', content: 'Search' }} placeholder="Search Recipes..." />
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header