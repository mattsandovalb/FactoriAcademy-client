import React from 'react'
import { Outlet } from 'react-router-dom'
import DashAdmin from './DashAdmin/DashAdmin.jsx'

const Layout = () => {
    return (
    <div>
     <DashAdmin />
        <main>
            <Outlet/>
        </main>
   foo
    </div>
)
}

export default Layout