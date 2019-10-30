import React, { Component } from 'react';
import ColorPicker from '../../components/colors/ColorPickercker';
import ColorDisplay from '../../components/colors/ColorDisplayplay';


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


