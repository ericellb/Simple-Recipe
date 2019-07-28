import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchDictionary } from '../actions';


export class Header extends Component {

  componentDidMount = () => {
    this.props.fetchDictionary();
  }

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

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary
  }
}

export default connect(mapStateToProps, { fetchDictionary })(Header)