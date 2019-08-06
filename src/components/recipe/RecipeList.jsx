import React, { Component } from 'react'
import { Card, Container, Loader, Button } from 'semantic-ui-react';
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

  handleLoadMoreRecipes = () => {
    const from = this.props.recipes.recipes.length
    const type = this.props.recipes.recipes[0].type;
    console.log(type);
    this.props.fetchRecipes(type, from, false);
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
        <div className="recipe-list-load-container">
          {!this.state.loading ? <Button toggle={this.state.loading} size="massive" onClick={this.handleLoadMoreRecipes}>Load more...</Button> : null}
        </div>
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