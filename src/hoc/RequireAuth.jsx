import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:8000/api'

function RequireAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/users/authenticated`)
        setIsAuthenticated(response.data.authenticated)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  if (isAuthenticated) {
    return children
  } else {
    return (
      <div>Please log in to access this content.</div>
    )
  }
}

export default RequireAuth;
