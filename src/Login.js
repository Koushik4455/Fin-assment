import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Login = () => {
  const [data,setData] = useState({
    email :"",
    password:""
  })
  const changeHandle =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const { id } = useParams ()
  useEffect(()=>{
    login ()
  },[])
  const login =async () =>{
    const res= await axios.get(`https://ring-ring-food.herokuapp.com/api/user/${id}`)
    setData(res.data)

  }

  const submit = (e) =>{
    e.preventDefault ()
    axios.put(`https://ring-ring-food.herokuapp.com/api/user/${id}`)
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 mt-5'>
            <div className='card Registion-card p-5'>
                <form onSubmit={submit}>
                    <h3 className='text-center mb-5' >Login Form</h3>
                    <input type="email" id='name' name='email' value={data.email} onChange={changeHandle} className='form-control mb-3 ' placeholder='Enter a Email id' />
                    <input type="password" id='password' name='password' value={data.passwordpassword} onChange={changeHandle} className='form-control mb-3' placeholder='Enter a Password' />
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
