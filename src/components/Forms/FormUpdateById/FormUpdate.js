import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../../services/car.service";
import css from "../Forms.module.css";

const FormUpdate = ({setId}) => {
    const {
        register, handleSubmit, setValue
    } = useForm();

    const submit = async (data) => {
        try {
            const car = await carService.getById(data.carId);
            await carService.updateById(data.carId, {
                model: data.model ? data.model : car.model,
                price: data.price ? data.price : car.price,
                year: data.year ? data.year : car.year
            });
            setId(data);
            console.log(data);

            console.log(car)


            setValue('carId', '');
            setValue('model', '');
            setValue('price', '');
            setValue('year', '');


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.padding}><label>ID: <input type="text"
                                                               defaultValue={''} {...register('carId')}/></label></div>
                <div className={css.padding}><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                </div>
                <div className={css.padding}><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                </div>
                <div className={css.padding}><label>Year: <input type="text"
                                                                 defaultValue={''} {...register('year')}/></label></div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default FormUpdate;