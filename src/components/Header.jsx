import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
import { getAdmin } from '../actions';


export class Header extends Component {

  componentDidUpdate = () => {
    if (this.props.isSignedIn)
      getAdmin(this.props.userId);
  }

  renderSubmitRecipe = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/recipe/submit">
          <Button className="create-recipe-button" color="teal">
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
    userId: state.auth.userId,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps, { getAdmin })(Header)