import React, { Component } from 'react'
import { Search, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchDictionary } from '../actions';
import _ from 'lodash';

const initialState = {
  isLoading: false,
  results: [],
  value: ''
}

export class Header extends Component {

  state = initialState;

  componentDidMount = () => {
    this.props.fetchDictionary();
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    console.log(this.props.dictionary.dictionary);
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatchType = result => re.test(result.type);
      const isMatchTitle = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.dictionary.dictionary, (isMatchType || isMatchTitle)).slice(0, 4),
      })
    }, 300)
  }

  render() {
    return (
      <Menu size="large" attached inverted borderless>
        <Menu.Item>Simple Recipe</Menu.Item>
        <Menu.Item position="right">
          <Search
            placeholder="Search recipes..."
            aligned="right"
            loading={this.state.isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={this.state.results}
            value={this.state.value}
            {...this.props}
          />
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary
  }
}

export default connect(mapStateToProps, { fetchDictionary })(Header)