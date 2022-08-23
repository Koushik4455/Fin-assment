import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='text-center'>
      <p className='Home-text'> Click on <Link to="/Login">Login </Link> </p>
      </div>
    </div>
  )
}

export default Home
