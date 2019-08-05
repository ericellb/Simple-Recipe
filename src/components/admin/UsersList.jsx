import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { List, Button, Icon, Modal, Popup } from 'semantic-ui-react';

const baseUrl = (process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://simple-recipe-api.herokuapp.com');

export class UsersList extends Component {

  state = {
    users: [],
    admins: [],
    popupContent: null,
    popupAction: null,
    popupShow: false
  }

  getListOfUsers = async () => {
    const { userId } = this.props;
    const res = await axios.get(`${baseUrl}/users?userId=${userId}`);
    this.setState({ users: res.data });
  }

  getListOfAdmins = async () => {
    const { userId } = this.props;
    const res = await axios.get(`${baseUrl}/admin?userId=${userId}`);
    this.setState({ admins: res.data });
  }

  addToAdmins = async (newAdminId) => {
    const { userId } = this.props;
    const res = await axios.post(`${baseUrl}/admin?userId=${userId}&newAdminId=${newAdminId}`);
    return res;
  }

  delFromAdmins = async (newAdminId) => {
    const { userId } = this.props;
    const res = await axios.delete(`${baseUrl}/admin?userId=${userId}&newAdminId=${newAdminId}`);
    return res;
  }

  componentDidMount = () => {
    if (this.props.userId !== null) {
      this.getListOfUsers();
      this.getListOfAdmins();
    }
  }

  isUserAdmin = (user) => {
    let isAdmin = false;
    for (let admin in this.state.admins) {
      if (user.userId === this.state.admins[admin].userId) {
        isAdmin = true;
      }
    }
    return isAdmin;
  }

  handlePopupClose = () => {
    setTimeout(() => {
      this.setState({ popupShow: false });
    }, 2500)
  }

  handlePopupConfirm = async (confirmation) => {
    const { type, userId } = this.state.popupAction;
    if (confirmation) {
      if (type === 'add') {
        await this.addToAdmins(userId);
        await this.getListOfAdmins();
      }
      else if (type === 'del') {
        await this.delFromAdmins(userId);
        await this.getListOfAdmins();
      }
    }
  }

  handleUserOnClick = async (user, action) => {
    if (action === 'add') {
      this.setState({
        popupContent: `Are you sure you want to add ${user.email} to Admins?`,
        popupAction: {
          type: 'add',
          userId: user.userId
        }
      })
    }
    else if (action === 'delete') {
      this.setState({
        popupContent: `Are you sure you want to remove ${user.email} from Admins ?`,
        popupAction: {
          type: 'del',
          userId: user.userId
        }
      })
    }
  }

  renderButtons = () => {
    return (
      <div className="popup-container">
        <div className="admin-popup-content">{this.state.popupContent}</div>
        <div className="admin-popup-buttons">
          <Button color='red' onClick={() => this.handlePopupConfirm(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={() => this.handlePopupConfirm(true)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        Admin List
        <br />
        <List celled relaxed verticalAlign='middle'>
          {this.state.users.map((user) => {
            return (
              <div className="user-list-container" key={user.userId}>
                {this.isUserAdmin(user) ? <Icon size='large' name='user secret'></Icon> : <Icon size='large' name='user'></Icon>}
                <div>{user.email}</div>
                <Popup
                  content={this.renderButtons}
                  trigger={this.isUserAdmin(user) ? <Button onClick={() => this.handleUserOnClick(user, 'delete')} color="red" className="admin-button" floated="right">Delete</Button> : <Button onClick={() => this.handleUserOnClick(user, 'add')} color="green" className="admin-button" floated="right">Add</Button>}
                  on='click'
                  position='right center'
                  hideOnScroll
                />
              </div>
            )
          })}
        </List>
      </div >

    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(UsersList);
