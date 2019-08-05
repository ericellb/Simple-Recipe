import React, { Component } from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';

const baseUrl = (process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://simple-recipe-api.herokuapp.com');

export class RecipeCard extends Component {

  // On first call
  constructor(props) {
    super(props);
    this.state = {
      link: props.link,
      id: props.id,
      src: props.src,
      title: props.title,
      description: props.description,
      extra: props.extra,
      rating: props.rating,
      buttons: props.buttons,
      ratingStars: []
    }
  }

  componentDidMount = () => {
    this.setState({ ratingStars: this.renderRating() });
  }

  // Recipe card update data
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props !== prevProps) {
      this.setState({
        link: this.props.link,
        id: this.props.id,
        src: this.props.src,
        title: this.props.title,
        description: this.props.description,
        extra: this.props.extra,
        rating: this.props.rating,
        buttons: this.props.buttons,
        ratingStars: this.renderRating()
      })
    }
  }


  handleRateRecipe = async (userRating) => {
    if (this.props.isSignedIn) {
      const res = await axios.patch(`${baseUrl}/recipes?userId=${this.props.userId}&recipeId=${this.state.id}&rating=${userRating}`);
      if (res.status === 200) {
        const tempRatingStars = this.renderRating(userRating);
        this.setState({ ratingStars: tempRatingStars });
      }
    }
  }

  renderRating = (userRating) => {
    let { rating } = this.props;
    if (userRating !== undefined)
      rating = userRating;
    rating = Math.floor(rating);
    const tempRatingStars = [];
    for (let i = 1; i < 6; i++) {
      if (i < rating + 1)
        tempRatingStars.push(<Icon name="star" color="yellow" key={i} onClick={() => this.handleRateRecipe(i)} />)
      else
        tempRatingStars.push(<Icon name="star outline" key={i} onClick={() => this.handleRateRecipe(i)} />)
    }
    return tempRatingStars;
  }

  renderExtra = () => {
    return (
      <div className="card-extra">
        <div>
          {this.state.extra}
        </div>
        <div>
          {this.state.ratingStars}
        </div>
        {this.state.buttons ? <div className="submission-section"><Button color="green" onClick={() => this.props.onClick(this.state.id, 'add')}>Approve</Button>
          <Button color="red" onClick={() => this.props.onClick(this.state.id, 'delete')}>Deny</Button>
        </div> : ''}
      </div>
    )
  }

  render() {
    const { link, src, title, description } = this.state;
    return (
      <Card>
        <Image href={link} target="_blank" src={src} ui />
        <Card.Content>
          <Card.Header href={link} target="_blank">{title}</Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.renderExtra()}
        </Card.Content>
      </Card>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps)(RecipeCard);