import React, { Component } from 'react'
import { Card, Container, Image, Form, Popup } from 'semantic-ui-react';
import axios from 'axios';

export class RecipeSubmit extends Component {

  state = {
    title: null,
    description: null,
    link: null,
    src: null,
    type: null,
    titleError: false,
    descriptionError: false,
    linkError: false,
    srcError: false,
    typeError: false,
    submitShow: false,
    submitError: false,
    popupContent: null
  }

  validateInput = async () => {
    ['title', 'description', 'link', 'src', 'type'].forEach(key => {
      if (this.state[key]) {
        // Test for valid URL
        if (key === 'link' || key === 'src') {
          var urlRegex = RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);
          if (urlRegex.test(this.state[key]) === false)
            this.setState({ [`${key}Error`]: `Invalid ${key}` })
          else
            this.setState({ [`${key}Error`]: false })
        }
        else
          this.setState({ [`${key}Error`]: false })
      }
      else
        this.setState({ [`${key}Error`]: `Invalid ${key}` })
    })
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmitShow = (status) => {
    if (status === 200) {
      this.setState({ popupContent: 'Successfully submitted recipe!' });
      this.setState({ submitError: false });
    }
    else {
      this.setState({ popupContent: 'Server Error:  either offline or invalid params' });
      this.setState({ submitError: true })
    }

    this.setState({ submitShow: true });
    setTimeout(() => {
      this.setState({ submitShow: false });
    }, 2500);
  }

  handleFormSubmit = async () => {
    // Validate form
    await this.validateInput();
    const { titleError, descriptionError, linkError, srcError, typeError } = this.state;
    if (!titleError && !descriptionError && !linkError && !srcError && !typeError) {
      // Hit our api!
      const res = await this.handleApiCall();
      this.handleSubmitShow(res.status);
    }
  }

  handleApiCall = async () => {
    return axios.post('http://localhost:3001/recipeSubmissions', {
      params: {
        title: this.state.title,
        description: this.state.description,
        src: this.state.src,
        link: this.state.link,
        type: this.state.type
      }
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      })
  }

  render() {
    return (
      <Container fluid className="recipe-list">
        <Card.Group centered>
          <Card>
            <Image src={this.state.src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.state.title}</Card.Header>
              <Card.Meta>
                <span>{this.state.description}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Form onSubmit={this.handleFormSubmit}>
                <div className="form-container">
                  <Form.Input label="Recipe Title" type="text" placeholder="Recipe Title..." name="title" onChange={this.handleInputChange} error={this.state.titleError}></Form.Input>
                  <Form.Input label="Recipe Description" type="text" placeholder="Recipe Description..." name="description" onChange={this.handleInputChange} error={this.state.descriptionError}></Form.Input>
                  <Form.Input label="Recipe Link" type="text" placeholder="Recipe Link..." name="link" onChange={this.handleInputChange} error={this.state.linkError}></Form.Input>
                  <Form.Input label="Recipe Image Src" type="text" placeholder="Recipe Image Src..." name="src" onChange={this.handleInputChange} error={this.state.srcError}></Form.Input>
                  <Form.Input label="Recipe Type" type="text" placeholder="Recipe Type..." name="type" onChange={this.handleInputChange} error={this.state.typeError}></Form.Input>
                  <Popup content={this.state.popupContent} className={this.state.submitError ? 'error' : 'success'} open={this.state.submitShow} on="click" position="top center" trigger={<Form.Button className="form-submit-button" align="right" color="green" content='Submit Recipe' />} />
                </div>
              </Form>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container >
    )
  }
}

export default RecipeSubmit
