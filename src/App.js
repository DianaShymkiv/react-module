import {Routes, Route, Link, Navigate} from "react-router-dom";

import css from './App.module.css';
import Layout from "./components/Layout/Layout";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";
import {AboutPage, HomePage, LoginPage, NotFoundPage, PostPage, SinglePostPage, UsersPage} from "./pages";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequireAuth>
                            <UsersPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
