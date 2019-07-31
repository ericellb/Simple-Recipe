import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';

export class RecipeCard extends Component {

  // On first call
  constructor(props) {
    super(props);
    this.state = {
      link: props.link,
      id: props._id,
      src: props.src,
      title: props.title,
      description: props.description
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
        description: this.props.description
      })
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
      />
    )
  }
}

export default RecipeCard
