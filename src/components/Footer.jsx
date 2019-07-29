import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <div className="content-footer footer-left">
          Data fueled by <a href="http://hellofresh.com">Hellofresh</a> and <a href="http://allrecipes.com"> Allrecipes </a>
        </div>
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
