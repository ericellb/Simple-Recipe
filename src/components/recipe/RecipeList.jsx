import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions'
import RecipeCard from './RecipeCard';

export class RecipeList extends Component {


  componentDidMount() {
    this.props.fetchRecipes(null, "chicken");
  }

  renderRecipeList() {
    if (this.props.recipes.recipes !== undefined)
      return this.props.recipes.recipes.map(data => {
        return (
          <RecipeCard
            key={data._id}
            className="card-container"
            link={data.link}
            id={data._id}
            src={data.src}
            title={data.title}
            description={data.description}
            extra={data.extra}
          />
        )
      });
    else return <div></div>
  }

  render() {
    return (
      <Container fluid className="recipe-list">
        <Card.Group centered className="recipe-card-group">
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