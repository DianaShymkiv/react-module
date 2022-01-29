import './App.css';

import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, [`count${action.payload}`]: state[`count${action.payload}`] + 1}
        case 'dec':
            return {...state, [`count${action.payload}`]: state[`count${action.payload}`] - 1}
        case 'reset':
            return {...state, [`count${action.payload}`]: 0}
        default:
            throw new Error('ERROR')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});
    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc', payload: 1})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', payload: 1})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', payload: 1})}>RESET</button>
            </div>
            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc', payload: 2})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', payload: 2})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', payload: 2})}>RESET</button>
            </div>
            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc', payload: 3})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', payload: 3})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', payload: 3})}>RESET</button>
            </div>
        </div>
    );
}

export default App;
