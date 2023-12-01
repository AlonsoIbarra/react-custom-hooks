import { useState } from "react";

export const useform = ( initialForm = {}  )=>{
    const [ formState, setState ] = useState( initialForm );

    const onInputChange = ( { target } )=>{
        const { name, value } = target;
        setState({
            ...formState,
            [ name ]: value
        })
    }
    const onResetForm = ()=>{
        setState({
            ...initialForm,
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };

}