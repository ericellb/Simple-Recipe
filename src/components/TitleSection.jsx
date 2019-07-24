import React, { Component } from 'react'
import titleImage from '../titleImage.jpg';



class TitleSection extends Component {

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <img src={titleImage} style={{ width: '100%', display: 'block' }}></img>
        <div style={{ position: 'absolute', width: '100%', background: 'black', top: '0px', height: '100%', opacity: 0.5 }}></div>
      </div >

    )
  }

}

export default TitleSection

//<div style={{ background: 'black', position: 'absolute', width: '100%', height: '240.63px', top: '64px', opacity: 0.5 }}></div>
