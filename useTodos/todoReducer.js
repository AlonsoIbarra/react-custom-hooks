export const todoReducer = (initialState, action={})=>{
    switch(action.type){
        case 'ADD':
            console.log("ADDING...");
            return [
                ...initialState,
                action.payload
            ];
        case 'DELETE':
            console.log("DELETE...");
            return initialState.filter( todo => todo.id !== action.payload );
        case 'TOGGLE':
            console.log("TOGGLEING...");
            return initialState.map( todo => {
                if (todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            } );
        case 'UPDATE':
            throw new Error('Action.type = UPDATE not implemented');
            default:
            return initialState;
    }
}