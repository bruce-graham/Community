import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewSubmit from './ReviewSubmit.jsx';
import GoogleMap from './GoogleMap.jsx'
import { sendZoom } from '../actions/action_zoom.jsx';


class NeighborhoodDetail extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.sendZoom({zoom: 10});
  }

  render() {

    if (!this.props.activeNeighborhood) {
      return <div></div>;
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>
          Name: {this.props.activeNeighborhood.name} <br/>
          Average Home Price: {this.props.activeNeighborhood.homePrice}
        </div>
        <ReviewSubmit />
        <GoogleMap />
      </div>
      );
  }
}

function mapStateToProps(state) {
//Whatever is returned here will show up as props inside of BookList Container
  return {
    activeNeighborhood: state.activeNeighborhood
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendZoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodDetail);