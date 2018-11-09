import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      name: this.props.children.name,
      age:  this.props.children.age
    }
  }

  render() {

    return (
      <div>
        name: <p>{this.state.name}</p>
        age: <p>{this.state.age}</p>
      </div>
    );
  }
}

export default connect()(NoteForm)
