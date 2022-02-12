import React, { Component } from 'react';

class Child extends Component {
  getAlert() {
    alert('clicked');
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default Child;