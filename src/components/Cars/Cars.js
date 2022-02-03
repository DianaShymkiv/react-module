import {Car} from "../Car/Car";
import {useSelector} from "react-redux";

const Cars = () => {

    const {cars} = useSelector(state => state['carReducer']);

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export {Cars};