/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './css/dashboard.css'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <h2>Go<Link to="/">Home</Link></h2>
    </div>
  )
}

export default NotFound