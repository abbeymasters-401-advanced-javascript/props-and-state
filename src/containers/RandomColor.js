import React, { Component } from 'react';

export default class RandomColor extends Component {

  state = { backgroundColor: 'black' };
  
  pickColor = (colors) => {
    let newBackground = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ backgroundColor: newBackground });
  };

  componentDidMount() {
    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'black', 'aqua'];
    window.setInterval(() => this.pickColor(colors), 1000);
  }

  render() {
    const bodyStyle = {
      backgroundColor: this.state.backgroundColor,
      width: '1450px',
      height: '1000px'
    };

    return (
      <div style={bodyStyle}></div>
    );
  }
}
