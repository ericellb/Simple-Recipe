import React, { Component } from 'react'
import { connect } from 'react-redux';
import createHashHistory from '../../history';
import './admin.css';
import UsersList from './UsersList';
import SubmissionList from './SubmissionList';

export class AdminPanel extends Component {

  componentDidMount = () => {
    // If user not admin, send to main page
    if (!this.props.isAdmin)
      createHashHistory.push('/');
  }

  componentDidUpdate = (prevProps, prevState) => {
    // Redirect user to main page (if user logs out on admin panel)
    if (prevProps.isAdmin !== this.props.isAdmin) {
      createHashHistory.push('/');
    }
  }

  render() {
    return (
      <div className="admin-flex-container">
        <div className="users-list flex-item">
          <UsersList></UsersList>
        </div>
        <div className="submission-list flex-item">
          <SubmissionList></SubmissionList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(AdminPanel);
