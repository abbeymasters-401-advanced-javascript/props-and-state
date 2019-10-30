import React, { Component } from 'react';

export default class RandomColor extends Component {

  state = { backgroundColor: 'black', backgroundImg: '' };
  
  pickColor = (colors) => {
    let newBackground = colors[Math.floor(Math.random() * colors.length)];
    if(this.state.backgroundColor === newBackground) this.setState({ backgroundImg: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
    else this.setState({ backgroundColor: newBackground, backgroundImg: '' });
  };

  componentDidMount() {
    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'black', 'aqua'];
    window.setInterval(() => this.pickColor(colors), 1000);
  }

  render() {
    const bodyStyle = {
      backgroundColor: this.state.backgroundColor,
      backgroundImage: this.state.backgroundImg,
      width: '1450px',
      height: '1000px'
    };

    return (
      <div style={bodyStyle}></div>
    );
  }
}
