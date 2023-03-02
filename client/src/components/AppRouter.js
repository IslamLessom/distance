import React, {useContext} from 'react'
//context
import { Context } from '../index'

//router-dom
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, authRoutes } from '../router'

function AppRouter() {
    const { user } = useContext(Context)
    console.log(user.isAuth)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact /> //exact указывает на то что путь должен точно совпадать
            )}
        </Routes>
    )
}

export default AppRouter
