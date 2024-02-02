import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ErrorPage.css'
function ErrorPage() {
  return (
    <div className='ErrorPage'>
        <h1>404! Not Found</h1>
        <Link to="/" className='link'>Go Home</Link>
    </div>
  )
}

export default ErrorPage