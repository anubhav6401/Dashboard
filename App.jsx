import React from 'react'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
export default function App(){
  return (
    <div className="min-h-screen bg-[#fff] flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-white">
        <Overview />
      </div>
    </div>
  )
}
