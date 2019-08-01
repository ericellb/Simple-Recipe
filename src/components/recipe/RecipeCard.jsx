import React, { Component } from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react';

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
      buttons: props.buttons
    }
  }

  // Recipe card update data
  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        link: this.props.link,
        id: this.props._id,
        src: this.props.src,
        title: this.props.title,
        description: this.props.description,
        extra: this.props.extra,
        buttons: this.props.buttons
      })
    }
  }

  renderExtra = () => {
    return (
      <div className="card-extra">
        <div>
          {this.state.extra}
        </div>
        <div>
          <Icon name="star outline" className="1" onClick={() => this.handleRateRecipe()}></Icon>
          <Icon name="star outline" className="2" onClick={() => this.handleRateRecipe()}></Icon>
          <Icon name="star outline" className="3" onClick={() => this.handleRateRecipe()}></Icon>
          <Icon name="star outline" className="4" onClick={() => this.handleRateRecipe()}></Icon>
          <Icon name="star outline" className="5" onClick={() => this.handleRateRecipe()}></Icon>
        </div>
        {this.state.buttons ? <div className="submission-section"><Button color="green" onClick={() => this.props.onClick(this.state.id, 'add')}>Approve</Button>
          <Button color="red" onClick={() => this.props.onClick(this.state.id, 'delete')}>Deny</Button>
        </div> : ''}
      </div>
    )
  }

  render() {
    const { link, _id, src, title, description, extra } = this.state;
    return (
      <Card key={_id}>
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

export default RecipeCard
