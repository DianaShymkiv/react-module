import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value])) // деструктуризуємо бо дані можуть не прийти чи будуть null в такому разі залишиться пустий масив
    }, [trigger])
    // якщо trigger змінюється useEffect виконюється ще раз. dependencies може бкти декілька
    //trigger по факту це наша машинка яку ми вводимо

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;