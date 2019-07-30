import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
import { getAdmin } from '../actions';


export class Header extends Component {

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.isSignedIn !== this.props.isSignedIn) {
      this.props.getAdmin(this.props.userId);
    }
  }

  renderAdminButton = () => {
    if (this.props.isAdmin) {
      return (
        <Link to="/admin">
          <Button className="header-button" color="green">
            Admin Panel
        </Button>
        </Link>
      )
    }
  }

  renderSubmitRecipe = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/recipe/submit">
          <Button className="header-button" color="teal">
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
          {this.renderAdminButton()}
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