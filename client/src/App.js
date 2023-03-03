import React, { useContext, useState, useEffect } from 'react'

//react-router
import { BrowserRouter } from "react-router-dom";

//mob-x
import { observer } from 'mobx-react-lite';

//components
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { Context } from './index';
import { check } from './http/userApi';

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;