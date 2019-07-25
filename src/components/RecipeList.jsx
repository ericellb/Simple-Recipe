import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react';

const mockText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

const mockData = [
  {
    title: 'Fish Tacos',
    meta: 'Cilantro Crema',
    src: '/images/tacos.jpg',
    description: mockText,
    id: '1'
  },
  {
    title: 'Ground Chuck Burger',
    meta: 'Blue Cheese',
    src: '/images/burger.jpg',
    description: mockText,
    id: '2'
  },
  {
    title: 'Chicken Thighs',
    meta: 'Maple Soy Glaze',
    src: '/images/chicken.jpg',
    description: mockText,
    id: '3'
  },
  {
    title: 'Seared Ribeye',
    meta: 'Garlic Butter',
    src: '/images/steak.jpg',
    description: mockText,
    id: '4'
  },
  {
    title: 'Chicken Pot Pie',
    meta: 'Creamy Cheddar',
    src: '/images/potpie.jpg',
    description: mockText,
    id: '5'
  },
  {
    title: 'Aztec Chickpea Bowl',
    meta: 'Cilantro Crema',
    src: '/images/veggie.jpg',
    description: mockText,
    id: '6'
  }
];

export class RecipeList extends Component {


  renderRecipeList() {
    return mockData.map((recipe) => {
      return (
        <Card
          className="card-container"
          key={recipe.id}
          image={recipe.src}
          header={recipe.title}
          meta={recipe.meta}
          description={recipe.description}
        />
      )
    });
  }

  render() {
    return (
      <Container fluid>
        <Card.Group centered>
          {this.renderRecipeList()}
        </Card.Group>
      </Container>
    )
  }
}

export default RecipeList