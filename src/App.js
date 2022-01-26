import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {
    AlbumsPage,
    CommentsPage,
    HomePage,
    NotFoundPage, PhotosPage,
    PostsPage,
    SinglePostPage,
    SingleUserPage,
    UserPostsPage,
    UsersPage
} from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'userPosts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
