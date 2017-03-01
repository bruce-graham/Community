import React from 'react';
import { Component } from 'react';
import ReviewMap from '../containers/ReviewMap.jsx';
import GoogleMap from '../containers/GoogleMap.jsx';
import { bindActionCreators } from 'redux';
import NeighborhoodDetail from '../containers/neighborhood-detail.jsx';
import { connect } from 'react-redux';
import axios from 'axios';
import { selectNeighborhood } from '../actions/action_select_Neighborhood.jsx';
import { sendZoom } from '../actions/action_zoom.jsx';

export class Neighborhood extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.sendZoom({zoom: 14});
    if (!this.props.neighborhood) {
      var that = this;
      const url = '/api/neighborhoods/searchbycity/' + that.props.params.city + '/' + that.props.params.state;
      axios.get(url).then(function(response) {
        function parseUrlState(url) {
          return url.substring(33,35);
        }
        function parseUrlCity(url) {
          return url.substring(36).split('/')[0];
        }
        var mappedData = response.data.filter(function(hood) {
          return hood.name[0] === that.props.params.hood;
        }).map(function(hood) {
          let homePrice;
          if (hood.zindex === undefined) {
            return {
              name: hood.name[0],
              city: parseUrlCity(hood.url[0]),
              state: parseUrlState(hood.url[0]),
              latitude: hood.latitude[0],
              longitude: hood.longitude[0],
              homePrice: "Housing Price Not Available"
            }
          } else {
              return {
                name: hood.name[0],
                city: parseUrlCity(hood.url[0]),
                state: parseUrlState(hood.url[0]),
                latitude: hood.latitude[0],
                longitude: hood.longitude[0],
                homePrice: hood.zindex[0]._ + " " + hood.zindex[0].$.currency
              }
            }
          });
          that.props.selectNeighborhood(mappedData[0]);
        });
    }
  }

  render() {
  return (
    <div>
      <ReviewMap />
      <NeighborhoodDetail />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    neighborhood: state.activeNeighborhood
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNeighborhood, sendZoom }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood);