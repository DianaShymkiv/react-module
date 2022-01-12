import React, {useEffect, useState} from 'react';
import {getRockets} from "../../services/api";
import Rocket from "../Rocket/Rocket";

const Rockets = () => {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        getRockets().then( value => setRockets(value.filter(item => (item.launch_year != 2020))))
    },[])
    return (
        <div>
            {rockets.map(value => <Rocket
                key={value.flight_number}
                name={value.mission_name}
                year={value.launch_year}
                img={value.links.mission_patch_small}
            />)}
        </div>
    );
};

export default Rockets;