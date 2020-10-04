export {
    CREATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,

    ActionCreator,
    State,
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



function todos(state = [], action){
    console.log("todos", state);
    console.log("action", action);
    switch(action.type){
        case CREATE_TODO:
            return [
                ...state,
                 {
                    id: state.length,
                    title: action.text,
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
                    let t = Object.assign({}, todo);

                    t.isCompleted = true;
                    return t;
                }
                return todo;
            })
        case UNCOMPLETE_TODO:
            return state.map((todo)=>{
                if(todo.id == action.todo.id){
                    let t = Object.assign({}, todo);

                    t.isCompleted = false;
                    return t;
                }
                return todo;
            })
        default: return state;


    }
}
function todoApp(state = initialState, action){
    let s = {
        todos: todos(state.todos, action)
    }
    console.log("todoApp:", s);
    return s;
}