import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'


function Add() {
    const[inputData,setInputData] = useState({name:'',Email:''})

    const navigate = useNavigate
    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:3001/users',inputData)
        .then(res=>{
            alert("Data Added Successfully!");
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
        <div className="text-center mb-3">
        <h2>Add Student Information </h2>
        </div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">Student ID:</label>
                <input type="text" name='id' className='form-control'
                onChange={e=>setInputData({...inputData, id:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control'
                onChange={e=>setInputData({...inputData, name:e.target.value})}/>
            </div>
            <div>
             <label htmlFor="Email">Email</label>
                <input type="Email" name='Email' className='form-control'
                onChange={e=>setInputData({...inputData, Email:e.target.value})}/>
            </div><br/>
            <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Add
