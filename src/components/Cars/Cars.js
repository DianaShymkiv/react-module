import {Car} from "../Car/Car";

const Cars = ({cars, getCarId}) => {
    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value} getCarId={getCarId}/>)}
        </div>
    );
};

export {Cars};