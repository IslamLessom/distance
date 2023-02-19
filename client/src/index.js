import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

//components
import App from './App';
import ProgramsStore from './store/ProgramsStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value= {{
    program: new ProgramsStore(),
    user: new UserStore()
  }}>
    <App />
  </Context.Provider>
);

