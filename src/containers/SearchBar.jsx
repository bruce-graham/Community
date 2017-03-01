import React, { Component } from 'react';
import axios from 'axios';
import City from './City.jsx';
import { hashHistory } from 'react-router';
import { push } from 'react-router-redux'
import GoogleMap from './GoogleMap.jsx';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state:''
    };

    this.onCityInputChange = this.onCityInputChange.bind(this);
    this.onStateInputChange = this.onStateInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCityInputChange(event) {
    this.setState({city: event.target.value})
  }

  onStateInputChange(event) {
    this.setState({state: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    //reroute to city component
    hashHistory.push(`/city/${this.state.city}/${this.state.state}`);
  }

  render() {
    return (
      <div>
      <form onSubmit={(e)=>this.onFormSubmit(e)} className="input-group">
        <input
        placeholder="Choose a city: "
        className="form-control"
        value={this.state.city}
        onChange={this.onCityInputChange}
        />
        <input
        placeholder="Choose a state"
        className="form-control"
        value={this.state.state}
        onChange={this.onStateInputChange}
        />
        <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      <GoogleMap />
      </div>
      );
  }
}
