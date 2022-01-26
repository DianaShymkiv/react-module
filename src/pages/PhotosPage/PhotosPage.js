import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {photoService} from "../../services/photo.service";
import Photo from "../../components/Photo/Photo";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(()=>{
        photoService.getAllById(albumId).then(value => setPhotos([...value]));
    },[albumId]);

    return (
        <div>
            <div>
                <h3>Photo</h3>
                {photos.map(value => <Photo key={value.id} photo={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PhotosPage};