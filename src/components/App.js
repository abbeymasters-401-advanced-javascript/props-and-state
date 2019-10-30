import React, { Component } from 'react';
import ColorDisplay from './colors/ColorDisplay';
import ColorPicker from './colors/ColorPicker';
import ColorContainer from '../containers/ColorContainer';
import RandomColor from '../containers/RandomColor';

export default class App extends Component {

  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorContainer />
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
}
