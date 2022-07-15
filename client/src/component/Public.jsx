import React from 'react'
import { Link } from 'react-router-dom'

function Public() {
  return (
    <div>
        <h1>Public</h1>
        <Link to="/login"> Login </Link>
    </div>
  )
}

export default Public