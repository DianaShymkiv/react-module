import './App.css';
import {useState} from "react";
import Users from "./components/Users/Users";

function App() {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.elements.name.value);
        setForm({
            name: e.target.elements.name.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div><label>Name: <input type='text' name='name'/></label></div>
                <div><label>Username: <input type='text' name='username'/></label></div>
                <div><label>Email: <input type='text' name='email'/></label></div>
                <button>Find</button>
            </form>
            <Users form={form}/>
        </div>
    );
}

export default App;
