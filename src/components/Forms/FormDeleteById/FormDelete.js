import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services/car.service";
import css from "../Forms.module.css";

const FormDelete = ({setId}) => {
    // const [formDelete, setFormDelete] = useState({});

    const {
        register, handleSubmit, setValue
    } = useForm();

    const submit = async (data) => {
        // console.log(data);
        try {
            await carService.deleteById(data.carId);
            setId(data.carId);
            // console.log(data.carId);
            // console.log(data);
            setValue('carId', '');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.padding}><label>ID: <input type="text"
                                                               defaultValue={''} {...register('carId')}/></label></div>
                <button>Delete</button>
            </form>
        </div>
    );
};

export default FormDelete;