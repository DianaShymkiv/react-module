import './App.css';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import {useState} from "react";
import Posts from "./components/Posts/Posts";

function App() {
    const [userId, setUserId] = useState();
    const [userPost, setUserPost] = useState();

    return (
        <div>
            <div className='d-flex'>
                <div className='block'><Users getId={setUserId}/></div>
                {userId && <div className='block'><UserDetails userId={userId} getPost={setUserPost}/></div>}
            </div>
            {userPost && <div className='block'><Posts userId={userId}/></div>}
        </div>
    );
}

export default App;
