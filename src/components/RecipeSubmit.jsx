import React, { Component } from 'react'
import { Card, Container, Image, Form, Popup } from 'semantic-ui-react';

export class RecipeSubmit extends Component {

  state = {
    title: null,
    description: null,
    link: null,
    src: null,
    titleError: false,
    descriptionError: false,
    linkError: false,
    srcError: false
  }

  validateInput = () => {
    ['title', 'description', 'link', 'src'].forEach(key => {
      if (this.state[key])
        this.setState({ [`${key}Error`]: false })
      else
        this.setState({ [`${key}Error`]: true })
    })
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleFormSubmit = async () => {
    // Validate form
    await this.validateInput();
    const { titleError, descriptionError, linkError, srcError } = this.state;
    if (titleError || descriptionError || linkError || srcError)
      console.log('error!');
    else
      console.log('valid form!')
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
              <Form onSubmit={this.handleFormSubmit} error='false'>
                <div className="form-container">
                  <Form.Input label="Recipe Title" type="text" placeholder="Recipe Title..." name="title" onChange={this.handleInputChange} error={this.state.titleError}></Form.Input>
                  <Form.Input label="Recipe Description" type="text" placeholder="Recipe Description..." name="description" onChange={this.handleInputChange} error={this.state.descriptionError}></Form.Input>
                  <Form.Input label="Recipe Link" type="text" placeholder="Recipe Link..." name="link" onChange={this.handleInputChange} error={this.state.linkError}></Form.Input>
                  <Form.Input label="Recipe Image Src" type="text" placeholder="Recipe Image Src..." name="src" onChange={this.handleInputChange} error={this.state.srcError}></Form.Input>
                  <Form.Button className="form-submit-button" align="right" color="secondary" content='Submit' />
                  <Popup content="Successfully sumbitted recipe. Thanks!" on="click" pinned></Popup>
                </div>
              </Form>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

export default RecipeSubmit
