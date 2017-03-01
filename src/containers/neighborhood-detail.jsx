import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewSubmit from './ReviewSubmit.jsx';
import GoogleMap from './GoogleMap.jsx'

class NeighborhoodDetail extends Component {
  constructor(props) {
    super(props);

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


export default connect(mapStateToProps)(NeighborhoodDetail);