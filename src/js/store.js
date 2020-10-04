export {
    CREATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,

    ActionCreator,
    State,
    update,
    todoApp
}

const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const UNCOMPLETE_TODO ="UNCOMPLETE_TODO";


class ActionCreator{


    createTodo(text){
        return {
            type: CREATE_TODO,
            text: text
        };
    }

    deleteTodo(todo){
        return {
            type: DELETE_TODO,
            todo: todo
        };
    }

    completeTodo(todo){
        return {
            type: COMPLETE_TODO,
            todo: todo
        };
    }

    unCompleteTodo(todo){
        return {
            type: UNCOMPLETE_TODO,
            todo: todo
        };
    }

}

class State{


    constructor(todos = []){
        this.todos = todos;
    }



    
}

let initialState = {
    todos: []
}


function update(state = initialState, action){
    console.log(state);
    switch(action.type){
        case CREATE_TODO:
            return new State(
                [
                    ...this.state.todos,
                     {
                        id: this.state.todos.length,
                        text: action.text,
                        isCompleted: false
                     }
                ]);

        case DELETE_TODO:
            return new State(
                this.state.todos.filter((todo)=>
                    todo.id == action.todo.id
                )
            );
        case COMPLETE_TODO:
            return new State(
                this.state.todos.map((todo)=>{
                    if(todo.id == action.todo.id){
                        return {
                            ...todo,
                            isCompleted: true
                        };
                    }
                    return todo;
                })
            );
        case UNCOMPLETE_TODO:
            return new State(
                this.state.todos.map((todo)=>{
                    if(todo.id == action.todo.id){
                        return {
                            ...todo,
                            isCompleted: false
                        };
                    }
                    return todo;
                })
            );
        default: return state;


    }
}
function todos(state = [], action){
    console.log(state);
    switch(action.type){
        case CREATE_TODO:
            return [
                ...this.state.todos,
                 {
                    id: this.state.todos.length,
                    text: action.text,
                    isCompleted: false
                 }
            ]

        case DELETE_TODO:
            state.filter((todo)=>
                todo.id == action.todo.id
            )
        case COMPLETE_TODO:
            return state.map((todo)=>{
                if(todo.id == action.todo.id){
                    return {
                        ...todo,
                        isCompleted: true
                    };
                }
                return todo;
            })
        case UNCOMPLETE_TODO:
            return state.map((todo)=>{
                if(todo.id == action.todo.id){
                    return {
                        ...todo,
                        isCompleted: false
                    };
                }
                return todo;
            })
        default: return state;


    }
}
function todoApp(state = {}, action){
    let s = {
        todos: todos(state.todos, action)
    }
    console.log(s);
    return s;
}