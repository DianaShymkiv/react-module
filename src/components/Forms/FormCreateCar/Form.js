import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../../services/car.service";
import {CarValidator} from "../../../validators/car.validator";
import css from "../Forms.module.css";

const Form = ({update}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});
    // onTouched - як тільки забираємо курсор з інпуту показує наші меседжі з car.validator


    // const submit = (data) => {
    //     // console.log(data);
    //
    //     // якщо дані не відповідають умовам інпуту то відровідь буде помилкою, повідомлення якої ми можемо перехорити
    //     carService.create(data).then(value => console.log(value)).catch(error => {
    //         setFormError(error.response.data);
    //
    //     })
    // }

    const submit = async (data) => {
        try {
            const car = await carService.create(data);
            // console.log(car);
            update(car);
            setValue('model', '');
            setValue('price', '');
            setValue('year', '');


        } catch (error) {
            setFormError(error.response.data);

        }
    }

    // // outputs data to the console in the real time
    // watch(value => console.log(value))

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.padding}><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                </div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {/*/!*formError це обєкт і якого якщо є ключ model і якщо є помилки по полю model*!/*/}

                {/*/!*в масиві може бути декілька елементів і коли ми беремо перший, другий стає на його місце( тобто першим). але цей метод*/}
                {/*є поганим, оскільки ці повід. є відповіддю з беку тобто запит всерівно відбувається.Потрібно зробити щоб відповідь приходила*/}
                {/*з фронту*!/*/}

                {errors.model && <span>{errors.model.message}</span>}
                <div className={css.padding}><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                </div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div className={css.padding}><label>Year: <input type="text"
                                                                 defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>Save</button>
            </form>
        </div>
    );
    //...register instead of onChange ana input name = 'model'
    // the name ('model') is the same as the name of fields in the object

};

export default Form;