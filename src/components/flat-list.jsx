import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Flat from './flat'

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat) => <Flat imageUrl={flat.imageUrl} name={flat.name} price={flat.price} key={flat.name}/>)}
    </div>
  )
}

export default FlatList;
