import React, { Component } from 'react';
import {connect} from 'react-redux';
import NoteForm from './NoteForm'

class Home extends Component {

  onClickSave() {
    var {dispatch} = this.props;
    var infomation = {
      type: 'ADD_ITEM',
      name: this.refs.name.value,
      age: this.refs.age.value
    }
    dispatch(
      infomation
    );
    this.refs.name.value ="";
    this.refs.age.value ="";
  }

  render() {
    console.log(this.props.saveText)

    return (
      <div>
        <input type="text" placeholder ="Enter your Name" ref="name"/>
        <input type="text" placeholder ="Enter your Age" ref="age"/>

        <button onClick ={this.onClickSave.bind(this)}> Save</button>
        {this.props.saveText.map((e,i) =>{
        return <NoteForm index = {i} key = {i} >{e}</NoteForm>
        })} 
      </div>
    );
  }
}
var getObj = (props)=>({
  saveText: props.saveText
})
export default connect(getObj)(Home)
