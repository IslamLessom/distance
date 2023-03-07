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

  if (loading) {
    return <h1 style={
      {
        textAlign: 'center',
        marginTop: '100px',
        fontSize: '40px'
      }
    }>Загрузка....</h1>
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;