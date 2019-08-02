import React, { Component } from 'react'
import { Menu, Icon, Responsive, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import createHashHistory from '../history';

import { getAdmin, signIn, signOut } from '../actions';

let dropdownOptions = [
  {
    key: 'home',
    text: 'Home',
    value: 'home',
    icon: 'home'
  }
]

let optionsSignedIn = [
  {
    key: 'submit',
    text: 'Submit Recipe',
    value: 'submit',
    icon: 'edit'
  },
  {
    key: 'admin',
    text: 'Admin Panel',
    value: 'admin',
    icon: 'user secret'
  }
]

export class Header extends Component {

  state = {
    activeItem: 'home',
    visible: false
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.isSignedIn !== this.props.isSignedIn) {
      this.props.getAdmin(this.props.userId);
    }
  }

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
    if (isSignedIn) {
      this.props.signIn(Eea, ig, U3);
      dropdownOptions.push(optionsSignedIn[0]);
      dropdownOptions.push(optionsSignedIn[1]);
    }
    else {
      this.props.signOut(this.auth.currentUser.get().getId());
      dropdownOptions.pop();
      dropdownOptions.pop();
    }
  }


  handleNavigation = (choice) => {
    if (choice === 'home')
      createHashHistory.push('/');
    else if (choice === 'submit')
      createHashHistory.push('/submit')
    else if (choice === 'admin')
      createHashHistory.push('/admin');

    if (choice === 'login') {
      if (this.props.isSignedIn)
        this.onSignOutClick();
      else
        this.onSignInClick();
    }
    else
      this.setState({ activeItem: choice });
  }

  handleItemClick = (e, { name }) => {
    this.handleNavigation(name);
  }

  mobileMenuChange = (e, { name, value }) => {
    this.handleNavigation(value);
  }


  render() {
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <Responsive as={Menu} attached inverted minWidth={427} className="top-menu">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Simple Recipe</Menu.Item>
          {this.props.isSignedIn ? <Menu.Item name="submit" active={activeItem === 'submit'} onClick={this.handleItemClick}>Submit Recipe</Menu.Item> : null}
          {this.props.isAdmin ? <Menu.Item name="admin" active={activeItem === 'admin'} onClick={this.handleItemClick}></Menu.Item> : null}
          <Menu.Item position="right" name='login' onClick={this.handleItemClick}><Icon className="google icon" />{this.props.isSignedIn ? 'Sign Out' : 'Sign In'}</Menu.Item>
        </Responsive>
        <Responsive as={Menu} attached inverted maxWidth={426} className="top-menu">
          <Menu.Item>
            <Dropdown
              className="inverted"
              inline
              options={dropdownOptions}
              defaultValue={dropdownOptions[0].value}
              onChange={this.mobileMenuChange}
            />
          </Menu.Item>
          <Menu.Item position="right" name='login' onClick={this.handleItemClick}><Icon className="google icon" />{this.props.isSignedIn ? 'Sign Out' : 'Sign In'}</Menu.Item>
        </Responsive>
      </React.Fragment>
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

export default connect(mapStateToProps, { getAdmin, signIn, signOut })(Header)