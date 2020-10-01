import React from 'react';
import ReactDOM, { render } from 'react-dom';





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

class TodoList extends React.Component{


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

class Todo extends React.Component{

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