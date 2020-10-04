import React from 'react';


export default class Todo extends React.Component{

    onChange(){
        this.props.onToggleCompleteTodo(this.props.todo)
    }
 
     render(){
         return (
             <li className={ this.props.todo.isCompleted ? 'completed' : ''}>
                 <input type="checkbox" checked={this.props.isCompleted} onClick={this.onChange.bind(this)}/>
                 {this.props.todo.title}
             </li>
         );
     }
 }