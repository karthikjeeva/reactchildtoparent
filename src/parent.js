import React, { Component } from 'react';
import Child from  './child';

const Form =  (props) => {
    
      return (
          <div>
            <button onClick={() => {  props.thisobj.parentfunc()}}>Click</button>         
          </div>
      );  
}

class Parent extends Component {
   
    parentfunc = () => {
        console.log("called")
        this.child.getAlert();
    }
  render() {
    return (
      <div>
        <Child ref={instance => { this.child = instance; }} />
        <Form thisobj={this}/>        
      </div>
    );
  }
}

export default Parent;