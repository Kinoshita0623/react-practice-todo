import React , { Component, } from 'react';

import { connect } from 'react-redux'

import ReactDOM, { render } from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { todoApp, ActionCreator, State } from './store';


let store = createStore(todoApp, new State());
console.log("store", store);
console.log("getState", store.getState());


let actionCreator = new ActionCreator();



class App extends React.Component{

    

    render(){
        const { todos, onCreateTodo, onToggleCompleteTodo } = this.props;
        return (
            <div>
                <h1>Todoリスト</h1>
                <TodoList todos={todos} onToggleCompleteTodo={onToggleCompleteTodo}/>
                <TodoForm createTodo={onCreateTodo}/>
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

function mapDispatchPropsContainer(dispatch){
    return {
        onCreateTodo: (text)=> dispatch(actionCreator.createTodo(text)),
        onToggleCompleteTodo: (t)=> {
            if(t.isCompleted){
                dispatch(actionCreator.unCompleteTodo(t));
            }else{
                dispatch(actionCreator.completeTodo(t));
            }
        }
    }
}


function mapStateToProps(state) {
    return state
  }
  

let Main =  connect(mapStateToProps, mapDispatchPropsContainer)(App);




const app = document.getElementById('app');
console.log(store);
console.log(store.getState());
ReactDOM.render(
    <Provider store={store} >
        <Main/>
    </Provider>
, app);