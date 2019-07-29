import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';


export class Header extends Component {

  renderSubmitRecipe = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/recipe/submit">
          <Button className="create-recipe-button" color="secondary">
            Submit Recipe
        </Button>
        </Link>
      )
    }
  }

  render() {
    return (
      <Menu size="large" attached inverted borderless>
        <Menu.Item><Link to="/">Simple Recipe</Link></Menu.Item>
        <Menu.Item position="right">
          {this.renderSubmitRecipe()}
          <GoogleAuth></GoogleAuth>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary,
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(Header)