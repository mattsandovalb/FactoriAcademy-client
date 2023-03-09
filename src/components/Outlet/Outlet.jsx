import React from 'react'
import { Layout } from 'react-router-dom'

const Outlet = () => {
    return (
    <div>
     <Layout />
        <main>
            <Outlet/>
        </main>
   
    </div>
)
}

export default Outlet;