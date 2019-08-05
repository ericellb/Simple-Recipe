import React, { Component } from 'react'
import { Card, Container, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions'
import RecipeCard from './RecipeCard';

export class RecipeList extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.fetchRecipes("chicken");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ loading: false });
    }
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
            rating={data.ratingAvg}
          />
        )
      });
    else return <div></div>
  }

  render() {
    return (
      <Container className="recipe-list">
        <Loader active={this.state.loading} content="The server is feeling a little grumpy... He's working on building some recipes." />
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