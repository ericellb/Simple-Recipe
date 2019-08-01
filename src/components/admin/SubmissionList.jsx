import React, { Component } from 'react'
import axios from 'axios';

import RecipeCard from '../recipe/RecipeCard';
import { Card, Modal, Button, Icon } from 'semantic-ui-react';

export class SubmissionList extends Component {

  state = {
    recipes: [],
    modalText: null,
    modalShow: false,
    modalAction: null
  }

  componentDidMount() {
    this.getSubmissionsList();
  }

  getSubmissionsList = async () => {
    const res = await axios.get('http://localhost:3001/recipeSubmissions');
    this.setState({ recipes: res.data });
  }

  addSubmission = async (submissionId) => {
    const res = await axios.patch(`http://localhost:3001/recipeSubmissions?id=${submissionId}&action=add`);
    return res;
  }

  delSubmission = async (submissionId) => {
    const res = await axios.patch(`http://localhost:3001/recipeSubmissions?id=${submissionId}&action=delete`);
    return res;
  }

  handleModalConfirm = async (confirmation) => {
    const { type, submissionId } = this.state.modalAction;
    if (confirmation) {
      if (type === 'add') {
        await this.addSubmission(submissionId);
        await this.getSubmissionsList();
        this.setState({ modalShow: false });
      }
      else if (type === 'del') {
        await this.delSubmission(submissionId);
        await this.getSubmissionsList();
        this.setState({ modalShow: false });
      }
    }
    else
      this.setState({ modalShow: false });
  }

  handleSubmissionClick = (submissionId, action) => {
    if (action === 'add') {
      this.setState({
        modalShow: true,
        modalText: `Are you sure you want to add ${submissionId} to Admins?`,
        modalAction: {
          type: 'add',
          submissionId: submissionId
        }
      })
    }
    else if (action === 'delete') {
      this.setState({
        modalShow: true,
        modalText: `Are you sure you want to remove ${submissionId} from Admins ?`,
        modalAction: {
          type: 'del',
          submissionId: submissionId
        }
      })
    }
  }

  renderRecipeList() {
    if (this.state.recipes !== undefined)
      return this.state.recipes.map(data => {
        return (
          <RecipeCard
            className="card-container"
            id={data._id}
            src={data.src}
            title={data.title}
            description={data.description}
            onClick={(submissionId, action) => this.handleSubmissionClick(submissionId, action)}
            buttons={true}
          >
          </RecipeCard>
        )
      });
    else return <div></div>
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
        <h1>Recipe Submission</h1>
        <Card.Group centered>
          {this.renderRecipeList()}
        </Card.Group>

        <Modal open={this.state.modalShow} basic size='small' header={'Admin Confirmation'} content={this.state.modalText} actions={this.renderButtons} />
      </div>
    )
  }
}

export default SubmissionList
