import './App.css';

import {useReducer, useState} from "react";
import {Cat} from "./components/Cat/Cat";
import {Dog} from "./components/Dog/Dog";

const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            if (!action.form.cat) {
                throw new Error('ERROR');
            }
            return {...state, cats: [...state.cats, action.form.cat]};
        case 'dog':
            if (!action.form.dog) {
                throw new Error('ERROR');
            }
            return {...state, dogs: [...state.dogs, action.form.dog]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter((x, i) => i !== action.index)};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter((x, i) => i !== action.index)};
        default:
            throw new Error('ERROR');
    }
}

function App() {
    const [form, setForm] = useState({cat: '', dog: ''});
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: e.target[0].name, form: form})
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const deleteAnimal = (e, type, index) => {
        e.preventDefault();
        dispatch({type: type, index: index});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Cat: <input type="text" name='cat' value={form.cat} onChange={onChange}/></label>
                    <button>Save</button>
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Dog: <input type="text" name='dog' value={form.dog} onChange={onChange}/></label>
                    <button>Save</button>
                </div>
            </form>
            <hr/>
            <div className={'flex'}>
                <div>
                    {state.cats && state.cats.map(((value, index) => <Cat key={index} cat={value} index={index}
                                                                          deleteAnimal={deleteAnimal}/>))}
                </div>
                <div>
                    {state.dogs && state.dogs.map(((value, index) => <Dog key={index} dog={value} index={index}
                                                                          deleteAnimal={deleteAnimal}/>))}
                </div>
            </div>
        </div>
    );
}

export default App;
