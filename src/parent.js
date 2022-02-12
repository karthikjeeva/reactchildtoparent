import React, { Component } from 'react';
import Child from  './child';

class Parent extends Component {
  render() {
    return (
      <div>
        <Child ref={instance => { this.child = instance; }} />
        <button onClick={() => { this.child.getAlert(); }}>Click</button>
      </div>
    );
  }
}

export default Parent;