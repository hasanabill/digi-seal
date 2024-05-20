import React from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
export const KeyContext = React.createContext();
function App() {
  return (
    <div className=' mx-auto'>
      <Outlet />
    </div>
  )
}

export default App
