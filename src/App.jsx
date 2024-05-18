import React from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
export const KeyContext = React.createContext();
function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
