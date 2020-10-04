import React from 'react';
import ReactDOM, { render } from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';





class App extends React.Component{

    constructor(){
        super();
        
        this.state = {
            todos: [
                { 
                    id: 0,
                    title: "ほげほげ",
                    isCompleted: false
                }
            ]
        };
        this.onCreatedTodo = this.onCreatedTodo.bind(this);
    }


    onCreatedTodo(todo){
        todo.id = this.state.todos.length;
        this.isCompleted = false;

        const { todos } = this.state;
        todos.push(todo);

        this.setState({ todos });
        console.log("create todo:" + this.state.todos);
    }

    onTodoChanged(todo){
        let { todos } = this.state;
        let updated = todos.map((t)=>{
            if(t.id == todo.id){
                console.log("更新検出");
                return todo;
            }
            return t;
        })
        console.log("更新があった:" + todo.title + "," + todo.id);
        console.log(updated);
        this.setState({ todos: updated });
    }
    

    

    toggleCompleteTodo(t){

        let todo = {
            ...t
        };

        console.log(todo);
        todo.isCompleted = !t.isCompleted;
        console.log(todo);
        this.onTodoChanged(todo)
    }

    render(){
        return (
            <div>
                <h1>Todoリスト</h1>
                <TodoList todos={this.state.todos} onToggleCompleteTodo={this.toggleCompleteTodo.bind(this)}/>
                <TodoForm createTodo={this.onCreatedTodo.bind(this)}/>
            </div>
        );
    }
}







const app = document.getElementById('app');
ReactDOM.render(<App/>, app);