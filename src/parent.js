import React, { Component } from 'react';
import Child from  './child';
import { useRef } from "react";

const Form =  (props) => {
    const childref = useRef();
    const somefunc = () => {
        console.log("called");
        console.log(childref.current.getAlert())
    }
    console.log(childref)
      return (
          <div>
            <Child ref={childref}/>
            <button onClick={() => { somefunc() }}>Click</button>
          </div>
      );  
}

class Parent extends Component {
   
    parentfunc = (ref) => {
        console.log(ref)
        //this.child.getAlert();
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