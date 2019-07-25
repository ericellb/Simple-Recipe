import React, { Component } from 'react'
import '../components/App.css';
import { Image } from 'semantic-ui-react';




class TitleSection extends Component {

  render() {
    return (
      <div className="title-container">
        <Image className="title-image" src="/images/titleImage.jpg" width='100%' />
        <div className="image-overlay"></div>
        <div className="text-overlay">
          <h1>Ingredient Recipes</h1>
          <p>Get tailored recipes by primary ingredients and cuisines types.</p>
        </div>
      </div>

    )
  }

}

export default TitleSection