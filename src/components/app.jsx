import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Map from './map'
import FlatList from './flat-list'

import flats from '../../data/flats'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: ""
    }
  }

  render() {
    return (
      <div>
        <div>
          <FlatList flats={this.state.flats}/>
        </div>
        <div className="map-conatiner">
        </div>
      </div>
    )
  }
}

export default App;
