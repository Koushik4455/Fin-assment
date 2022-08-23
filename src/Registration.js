import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './fin.css'


const Registration = () => {
    const url =" https://ring-ring-food.herokuapp.com/api/user"
    const [data,setData] = useState({
        email: "",
        firstname: "",
        phone: "",
        password: ""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            email: data.email,
            firstname: data.firstname,
            phone: data.phone,
            password: data.password
        })
        .then(res=>{
            console.log(res.data)
            navigator ("/Login")
        })
    }
    function handle(e) {
        const newdata = { ...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 mt-5'>
            <div className='card Registion-card p-5'>
                <form onSubmit={(e)=> submit(e)}>
                    <h3 className='text-center mb-5' >Register Form</h3>
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" className='form-control mb-3 ' placeholder='Enter a Email id' / >
                    <input onChange={(e)=>handle(e)} id="firstname" value={data.firstname}  type="text" className='form-control  mb-3' placeholder='Enter a Full Name' / >
                    <input onChange={(e)=>handle(e)} id="phone" value={data.phone}  type="tel" className='form-control  mb-3' placeholder='Enter a Phone number' / >
                    <input onChange={(e)=>handle(e)} id="password" value={data.password}  type="password" className='form-control mb-3' placeholder='Enter a Password'/>
                    <button className='btn  Registation-button'>Submit</button>
                    <Link to="/Login"><button className='btn  login-newuser-button'>Already Registed</button></Link>

                </form>
            </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default Registration
