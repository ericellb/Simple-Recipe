import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { List, Button, Icon, Modal } from 'semantic-ui-react';

export class UsersList extends Component {

  state = {
    users: [],
    admins: [],
    modalText: null,
    modalShow: false,
    modalAction: null
  }

  getListOfUsers = async () => {
    const { userId } = this.props;
    const res = await axios.get(`http://localhost:3001/users?userId=${userId}`);
    this.setState({ users: res.data });
  }

  getListOfAdmins = async () => {
    const { userId } = this.props;
    const res = await axios.get(`http://localhost:3001/admin?userId=${userId}`);
    this.setState({ admins: res.data });
  }

  addToAdmins = async (newAdminId) => {
    const { userId } = this.props;
    const res = await axios.post(`http://localhost:3001/admin?userId=${userId}&newAdminId=${newAdminId}`);
    return res;
  }

  delFromAdmins = async (newAdminId) => {
    console.log(newAdminId);
    const { userId } = this.props;
    const res = await axios.delete(`http://localhost:3001/admin?userId=${userId}&newAdminId=${newAdminId}`);
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

  handleModalConfirm = async (confirmation) => {
    const { type, userId } = this.state.modalAction;
    if (confirmation) {
      if (type === 'add') {
        await this.addToAdmins(userId);
        await this.getListOfAdmins();
        this.setState({ modalShow: false });
      }
      else if (type === 'del') {
        await this.delFromAdmins(userId);
        await this.getListOfAdmins();
        this.setState({ modalShow: false });
      }
    }
    else
      this.setState({ modalShow: false });
  }

  handleUserOnClick = async (user, action) => {
    console.log(user);
    if (action === 'add') {
      this.setState({
        modalShow: true,
        modalText: `Are you sure you want to add ${user.email} to Admins?`,
        modalAction: {
          type: 'add',
          userId: user.userId
        }
      })
    }
    else if (action === 'delete') {
      this.setState({
        modalShow: true,
        modalText: `Are you sure you want to remove ${user.email} from Admins ?`,
        modalAction: {
          type: 'del',
          userId: user.userId
        }
      })
    }
  }

  renderButtons = () => {
    return (
      <div>
        <Button basic color='red' inverted onClick={() => this.handleModalConfirm(false)}>
          <Icon name='remove' /> No
      </Button>
        <Button color='green' inverted onClick={() => this.handleModalConfirm(true)}>
          <Icon name='checkmark' /> Yes
      </Button>
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
              <div className="user-list-container">
                {this.isUserAdmin(user) ? <Icon size='large' name='user secret'></Icon> : <Icon size='large' name='user'></Icon>}
                <div>{user.email}</div>
                {this.isUserAdmin(user) ? <Button onClick={() => this.handleUserOnClick(user, 'delete')} color="red" className="admin-button" floated="right">Delete</Button> : <Button onClick={() => this.handleUserOnClick(user, 'add')} color="green" className="admin-button" floated="right">Add</Button>}
              </div>
            )
          })}
        </List>

        <Modal open={this.state.modalShow} basic size='small' header={'Admin Confirmation'} content={this.state.modalText} actions={this.renderButtons} />

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
