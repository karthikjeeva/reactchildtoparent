import React, { Component } from 'react';
import Child from  './child';

class Parent extends Component {
    parentfunc = () => {
        console.log("called")
        this.child.getAlert();
    }
  render() {
    return (
      <div>
        <Child ref={instance => { this.child = instance; }} />
        <button onClick={() => {  this.parentfunc()}}>Click</button>
      </div>
    );
  }
}

export default Parent;