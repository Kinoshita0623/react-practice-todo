import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component{


    render(){
        
        let todos = this.props.todos.map(
            (t)=>{
                console.log(t);
                return <Todo key={t.id} todo={t} onToggleCompleteTodo={this.props.onToggleCompleteTodo}/>

            }

        );
        console.log(this.props.todos);
        return (
            <ul>{todos}</ul>
        );
    }
}