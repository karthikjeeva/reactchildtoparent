import React, { Component } from 'react';
import Child from  './child';
import { useRef } from "react";
var childrefobj = {};

const Form =  (props) => {
    const childref = useRef();
    const somefunc = (props) => {
        childrefobj = childref.current;
        props.callparent();
    }
  
      return (
          <div>
            <Child ref={childref}/>
            <button onClick={() => { somefunc( props) }}>Click</button>
          </div>
      );  
}

class Parent extends Component {
   
    parentfunc = () => { 
        childrefobj.getAlert();
    }
  render() {
    return (
      <div>
        <Form callparent = {() => {this.parentfunc()}}/>        
      </div>
    );
  }
}

export default Parent;