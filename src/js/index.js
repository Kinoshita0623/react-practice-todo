import React from 'react';
import ReactDOM, { render } from 'react-dom';





class App extends React.Component{

    constructor(){
        super();
        
        this.state = {
            todos: [
                { 
                    id: 0,
                    title: "ほげほげ"
                }
            ]
        };
        this.onCreatedTodo = this.onCreatedTodo.bind(this);
    }


    onCreatedTodo(todo){
        todo.id = this.state.todos.length;

        const { todos } = this.state;
        todos.push(todo);

        this.setState({ todos });
        console.log("create todo:" + this.state.todos);
    }
    
    render(){
        return (
            <div>
                <h1>Todoリスト</h1>
                <TodoList todos={this.state.todos}/>
                <TodoForm createTodo={this.onCreatedTodo.bind(this)}/>
            </div>
        );
    }
}

class TodoList extends React.Component{

   
    render(){
        
        let todos = this.props.todos.map(
            (t)=>{
                console.log(t);
                return <Todo key={t.id} todo={t}/>

            }

        );
        console.log(this.props.todos);
        return (
            <ul>{todos}</ul>
        );
    }
}

class Todo extends React.Component{

    render(){
        return (
            <li>{this.props.todo.title}</li>
        );
    }
}

class TodoForm extends React.Component{

    constructor(){
        super();

        this.state = {
            title: '',
            id: 0
        };
    }

    onTitleChanged(e){
        console.log(e);
        this.setState(
            {
                title: e.target.value
            }
        );
    }

    createTodo(){
        this.props.createTodo(this.state)
        console.log(this.state);
        this.setState({
            title: ''
        });
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.onTitleChanged.bind(this)} value={this.state.title}></input>
                <button onClick={this.createTodo.bind(this)}>Create</button>
            </div>
        );
    }
}




const app = document.getElementById('app');
ReactDOM.render(<App/>, app);