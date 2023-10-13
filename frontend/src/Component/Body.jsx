import React from 'react'
import SideNavbar from './SideNavbar'
import Homepage from './Homepage'
import Navbar from './Navbar'
const Body = () => {
    return (
        <div className=" h-screen font-sans">
        <Navbar/>
        <main className="flex h-[90%] w-full justify-between bg-pink-50">
            <SideNavbar />
            <Homepage />
        </main>
      </div>
    )
}

export default Body