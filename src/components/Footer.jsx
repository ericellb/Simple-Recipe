import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <div className="content-footer footer-left">Data fuled by Allrecipes and Hellofresh</div>
        <div className="content-footer footer-right">
          <a href="https://github.com/shmeegie" class="github-icon-link">
            <Icon color="white" link aria-hidden="true" size="big" name="github" />
          </a>
        </div>
      </div>
    )
  }
}

export default Footer