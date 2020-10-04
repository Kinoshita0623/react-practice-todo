
import React from 'react';

export default class TodoForm extends React.Component{

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
        this.props.createTodo(this.state.title);
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

