import React, { Component } from 'react';
import NTTTEvenfromdemo from './components/NTTTEvenfromdemo';
import LQVEventFromDemo2 from './components/LQVEventFromDemo2';
import LQVEventFromDemo3 from './components/LQVEventFromDemo3';
import LQVEventFromDemo4 from './components/LQVEventFromDemo4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>event from demo</h1>
       <LQVEventFromDemo />
       <LQVEventFromDemo2 />
       <LQVEventFromDemo3 />
       <LQVEventFromDemo4 name="Lê Quốc Vương" />

      </div>
    );
  }
}