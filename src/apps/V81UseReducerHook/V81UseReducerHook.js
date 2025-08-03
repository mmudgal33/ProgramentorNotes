// useState- for state handling
// useEffect- class component mount, unmount, update functionality inside it
// useContext- without propdrilling state and props passing mechanism
// useRef- applications like getting particular element, handle element directly on real dom, useState + useRef used
// less use recommended. useState + useEffect together return infinite loop. 
// useReducer-pure functions are reducers, used in Redux, alternate of useState(built from useReducer)
// simple state logic useState used, complex logic useReducer used
// useCallback
// useMemo
// custom hook

// const [count, dispatch] = useReducer(reducer, initialState);
// reducer(action + state) is pure function return newState, initialState is parameter/argument

import React, { useReducer } from 'react'
// import { useState } from 'react'

export function V81UseReducerHook() {
    
    
    const initialState = 0;
    const reducer = (state, action) => {
        switch(action){
            case 'increament': return state + 1;
            case 'decreament': return state - 1;
            case 'reset': return initialState;
            default: return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
            <br /><br />
            <button onClick={() => dispatch('decreament')}>Decrement</button>
            <button onClick={() => dispatch('increament')}>Increment</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <h1>count = {count}</h1>
        </>
    )
}

// export function V81UseReducerHook() {
//     const [count, setCount] = useState(0);
    
//     return (
//         <>
//             <br /><br />
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <h1>count = {count}</h1>
//         </>
//     )
// }



