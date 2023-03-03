import React, { useContext } from 'react'
//context
import { Context } from '../index'

//router-dom
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, authRoutes } from '../router'
import { HOME_ROUTE } from '../utils/consts';

//mob-x
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact /> //exact указывает на то что путь должен точно совпадать
            )}
        </Routes>
    )
})

export default AppRouter
