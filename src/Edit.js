import React, { useEffect,useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";

function Edit(){
    const {id} = useParams();
    const[data,setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3001/users/${id}`)
       .then(res => setData(res.data))
       .catch(err => console.log(err))
    }, [])
    function handleSubmit(event){
        event.preventDefault()
        axios.put(`http://localhost:3001/users/${id}`, data)
        .then(res=> {
            alert("Data Updated Successfully !");
            navigate('/')
        })
    }
    return(
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
        <div className="text-center mb-3">
        <h2>Student Information System</h2>
       </div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">Student ID:</label>
                <input type="text" disabled name='id' value={data.id} className='form-control'
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={data.name} className='form-control'
                onChange={e => setData({...data, name: e.target.value})}/>
            </div>
            <div>
             <label htmlFor="Email">Email</label>
                <input type="Email" name='Email'  value={data.Email} className='form-control'
               onChange={e => setData({...data, Email: e.target.value})}/>
            </div><br/>
            <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
    )
}
export default Edit;