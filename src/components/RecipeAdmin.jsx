import React, { Component } from 'react'
import { connect } from 'react-redux';
import createBrowserHistory from '../history';

export class RecipeAdmin extends Component {

  componentDidMount = () => {
    // If user not admin, send to main page
    if (!this.props.isAdmin)
      createBrowserHistory.push('/');
  }

  componentDidUpdate = (prevProps, prevState) => {
    // Redirect user to main page (if user logs out on admin panel)
    if (prevProps.isAdmin !== this.props.isAdmin) {
      createBrowserHistory.push('/');
    }
  }

  render() {
    return (
      <div>
        Show pending recipes
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(RecipeAdmin);
