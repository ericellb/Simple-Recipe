import React, { Component } from 'react'
import { Card, Image, Button, Container } from 'semantic-ui-react';

export class RecipeList extends Component {
  render() {
    const mockText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    return (
      <Container fluid>
        <Card.Group centered>
          <Card className="card-container"
            image="/images/tacos.jpg"
            header="Fish Tacos"
            meta="Cilantro Crema"
            description={mockText}
          />
          <Card className="card-container"
            image="/images/burger.jpg"
            header="Ground Chuck Burger"
            meta="Blue Cheese"
            description={mockText}
          />
          <Card className="card-container"
            image="/images/chicken.jpg"
            header="Chicken Thighs"
            meta="Maple Soy Glaze"
            description={mockText}
          />
          <Card className="card-container"
            image="/images/steak.jpg"
            header="Seared Ribeye"
            meta="Garlic Butter"
            description={mockText}
          />
          <Card className="card-container"
            image="/images/potpie.jpg"
            header="Chicken Pot Pie"
            meta="Creamy Cheddar"
            description={mockText}
          />
          <Card className="card-container"
            image="/images/veggie.jpg"
            header="Aztec Chickpea Bowl"
            meta="Cilantro Crema"
            description={mockText}
          />
        </Card.Group>
      </Container>
    )
  }
}

export default RecipeList
