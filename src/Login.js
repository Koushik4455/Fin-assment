import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 mt-5'>
            <div className='card Registion-card p-5'>
                <form>
                    <h3 className='text-center mb-5' >Login Form</h3>
                    <input type="email" className='form-control mb-3 ' placeholder='Enter a Email id' />
                    <input type="password" className='form-control mb-3' placeholder='Enter a Password' />
                    <Link to=""><button className='btn  login-button'>Submit</button></Link> 
                    <Link to="/Registration"><button className='btn  login-newuser-button'>New User</button></Link>


                </form>
            </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default Login
