import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react';

export class RecipeCard extends Component {

  // On first call
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      link: props.link,
      id: props.id,
      src: props.src,
      title: props.title,
      description: props.description,
      buttons: props.buttons
    }
  }

  // Recipe card update data
  componentDidUpdate = (prevProps) => {
    console.log(this.props);
    if (this.props !== prevProps) {
      this.setState({
        link: this.props.link,
        id: this.props._id,
        src: this.props.src,
        title: this.props.title,
        description: this.props.description,
        buttons: this.props.buttons
      })
    }
  }

  renderButtons = () => {
    console.log(this.state.id);
    if (this.state.buttons) {
      return (
        <div>
          <Button color="green" onClick={() => this.props.onClick(this.state.id, 'add')}>Approve</Button>
          <Button color="red" onClick={() => this.props.onClick(this.state.id, 'delete')}>Deny</Button>
        </div>
      )
    }
  }

  render() {
    const { link, _id, src, title, description } = this.state;
    return (
      <Card
        href={link}
        key={_id}
        image={src}
        header={title}
        description={description}
        extra={this.renderButtons()}
      />
    )
  }
}

export default RecipeCard
