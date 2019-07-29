import React, { Component } from 'react'
import { Card, Container, Image, Form } from 'semantic-ui-react';

export class RecipeSubmit extends Component {

  state = {
    title: '',
    description: '',
    link: '',
    src: ''
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleFormSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
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
                  <Form.Input label="Recipe Title" type="text" placeholder="Recipe Title..." name="title" onChange={this.handleInputChange}></Form.Input>
                  <Form.Input label="Recipe Description" type="text" placeholder="Recipe Description..." name="description" onChange={this.handleInputChange}></Form.Input>
                  <Form.Input label="Recipe Link" type="text" placeholder="Recipe Link..." name="link" onChange={this.handleInputChange}></Form.Input>
                  <Form.Input label="Recipe Image Src" type="text" placeholder="Recipe Image Src..." name="src" onChange={this.handleInputChange}></Form.Input>
                  <Form.Button className="form-submit-button" align="right" color="secondary" content='Submit' />
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
