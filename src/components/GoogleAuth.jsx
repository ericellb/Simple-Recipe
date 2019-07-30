import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { Button, Icon } from 'semantic-ui-react';

export class GoogleAuth extends Component {


  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '607332079220-hhs6rhoaq44p29150j4thfdgoj7c5k59.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        // Listen for changes
        this.auth.isSignedIn.listen(() => {
          this.onAuthChange(this.auth.isSignedIn.get());
        });
      });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onAuthChange = (isSignedIn) => {
    const { Eea, ig, U3 } = this.auth.currentUser.get().getBasicProfile();
    if (isSignedIn)
      this.props.signIn(Eea, ig, U3);
    else
      this.props.signOut(this.auth.currentUser.get().getId());
  }

  render() {
    if (this.props.isSignedIn) {
      return (
        <Button color="red" onClick={this.onSignOutClick} className="header-button">
          <Icon className="google icon" />
          Sign Out
        </Button>
      )
    }
    else if (!this.props.isSignedIn) {
      return (
        <Button color="teal" onClick={this.onSignInClick} className="header-button">
          <Icon className="google icon" />
          Sign In with Google
        </Button>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
