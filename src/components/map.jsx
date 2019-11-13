import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Mapbox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWEtdiIsImEiOiJjazJ2cGRvNWUwNng0M21ucWQzcGFqY2g2In0.WBlEoavgZb1PPFxXqtKKqQ'
});

class Map extends Component {
  render() {
    return (
      <Mapbox style="mapbox://styles/mapbox/streets-v8"></Mapbox>
    )
  }
}

export default Map;
