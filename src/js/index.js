import React , { Component, } from 'react';

import { connect } from 'react-redux'

import ReactDOM, { render } from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { todoApp, ActionCreator } from './store';


let store = createStore(todoApp);




class App extends React.Component{

    constructor(){
        super();
        

        this.onCreatedTodo = this.onCreatedTodo.bind(this);
        this.actionCreator = new ActionCreator();
        
    }


    onCreatedTodo(title){
        this.dispatch(this.actionCreator.createTodo(title));
    }

   
    

    

    toggleCompleteTodo(t){

        if(t.isCompleted){
            this.dispatch(this.actionCreator.unCompleteTodo(t));
        }else{
            this.dispatch(this.actionCreator.completeTodo(t));
        }
    }

    render(){
        const { todos, dispatch } = this.props;
        this.dispatch = dispatch;
        console.log("todos");
        console.log(todos);
        console.log("props");
        console.log(this.props);
        return (
            <div>
                <h1>Todoリスト</h1>
                <TodoList todos={todos} onToggleCompleteTodo={this.toggleCompleteTodo.bind(this)}/>
                <TodoForm createTodo={this.onCreatedTodo.bind(this)}/>
            </div>
        );
    }
}

/*App.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}*/

function getTodos(state){
    return {
        todos: state.todos
    };
}

export default connect(getTodos)(App);




const app = document.getElementById('app');
console.log(store);
console.log(store.getState());
ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>
, app);