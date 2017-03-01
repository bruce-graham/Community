import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getReview } from '../actions/index.jsx'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import $ from 'jquery'


/* Container component handling states, event handlers, and passing down props */

export class ReviewMap extends Component {

  constructor(props) {
    super(props);

  }

  //TODO: Use activeNeighborhood name, city, state to implement url
  //in order to get reviews for that specific neighborhood
  //When we get back the reviews, modify mapping to display categories
  //that were rated by each user

  loadReviewsFromServer() {
    var that = this;
    $.ajax({
      type: "GET",
      // url: '/api/neighborhoods/reviews/' + that.props.activeNeighborhood.name + '/' + that.props.activeNeighborhood.city + '/' + that.props.activeNeighborhood.state,
      url: '/api/neighborhoods/reviews/downtown/austin/texas',
      success: function(data) {
        console.log("Get review successful", data);
        that.props.getReview(data);
      },
      error: function (error) {
        console.log("Error: Get review failed", error);
      },
      contentType: 'application/json',
      Accept: 'application/json',
      dataType: 'json'
    });
  }

  componentWillMount() {
    console.log('ReviewMap component mounted');
    this.loadReviewsFromServer();
  }


  renderList() {
    return this.props.reviews.map((review) => {
      return (
        <div className="panel panel-default">
        <div className="panel-body"> {review.text} </div>
        </div>
      );
    });
  }

  render() {
    return (
        <ul className="list-item col-sm-4">
          {this.renderList()}
        </ul>
      );
  }
}


function mapStateToProps(state) {
  return {
    reviews: state.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getReview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewMap);
