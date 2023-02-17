import React from 'react'

//router-dom
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from '../router'

function AppRouter() {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact /> //exact указывает на то что путь должен точно совпадать
            )}
        </Routes>
    )
}

export default AppRouter
