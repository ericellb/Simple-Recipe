import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions'

export class RecipeList extends Component {


  componentDidMount() {
    this.props.fetchRecipes(null, "chicken");
  }

  renderRecipeList() {
    if (this.props.recipes.recipes !== undefined)
      return this.props.recipes.recipes.map(data => {
        return (
          <Card
            className="card-container"
            href={data.link}
            key={data._id}
            image={data.src}
            header={data.title}
            description={data.description}
          />
        )
      });
    else return <div></div>
  }

  render() {
    return (
      <Container fluid className="recipe-list">
        <Card.Group centered>
          {this.renderRecipeList()}
        </Card.Group>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);