import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos =()=>{

    const [ todos, dispatch ] = useReducer( todoReducer, [], init);

    // para salvar elementos despues de modificar lista de todos
    useEffect(
        ()=>{
            localStorage.setItem( 'todos', JSON.stringify( todos ) );
        }
        ,[todos]
    );

    const handleAddTodo = (todo) => {
        const action = {
            type: 'ADD',
            payload: todo
        };
        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: 'DELETE',
            payload: id
        };
        dispatch(action);
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: 'TOGGLE',
            payload: id
        };
        dispatch(action);
    }

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingCount: todos.filter( todo => !todo.done ).length,
    }
}