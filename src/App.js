import './App.css';
import {useState} from "react";

import Form from "./components/Forms/FormCreateCar/Form";
import Cars from "./components/Cars/Cars";
import FormDelete from "./components/Forms/FormDeleteById/FormDelete";
import FormUpdate from "./components/Forms/FormUpdateById/FormUpdate";

function App() {
    const [trigger, setTrigger] = useState(null);

    // const update = (data) => {
    //   setTrigger(data);
    // }
    // // ця функція передає дані з одної функції в іншу тому ми можкмо не писати її, а у форму передати setTrigger - ефект той же

    return (
        <>
            {/*<FormCreateCar update={update}/>*/}
            <Form update={setTrigger}/>
            <FormDelete setId={setTrigger}/>
            <FormUpdate setId={setTrigger}/>
            <Cars trigger={trigger}/>
        </>
    );
}

export default App;
