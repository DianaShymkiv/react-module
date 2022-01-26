import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {albumService} from "../../services/album.service";
import Album from "../../components/Album/Album";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumService.getAllById(id).then(value => setAlbums([...value]));
    }, [id]);

    return (
        <div>
            <div>
                <h3>Albums</h3>
                {albums.map(value => <Album key={value.id} album={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumsPage};