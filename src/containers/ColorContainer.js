import React, { Component } from 'react';
import ColorPicker from '../components/colors/ColorPicker';
import ColorDisplay from '../components/colors/ColorDisplay';


export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    const colors = ['red', 'green', 'black', 'yellow'];
    const { backgroundColor } = this.state;

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
}


