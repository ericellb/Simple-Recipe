import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'



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

/*
     <div className="ui menu primary">
        <div className="header item white-text">
          Simple Recipe
        </div>
        <div className="ui category search item floated right">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search recipes..." />
            <i className="search icon"></i>
          </div>
          <button className="ui button secondary">Submit</button>
          <div className="results">hey</div>
        </div>
      </div>
      */