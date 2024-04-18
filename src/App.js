import React, {useEffect,useState} from 'react';
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[columns,setColumns] = useState([])
  const[records,setRecords] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get('http://localhost:3001/users')
      .then(res=>{
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])
  return (
    <div className="container mt-5">
      <div className="text-center mb-3" >
        <h2>Student Information System</h2>
      </div>
      <div className="text-end"><Link to="/create" className="btn btn-primary">Add</Link></div>
     <table className="table">
       <thead>
        <tr>
         {columns.map((c,i)=>(
          <th key={i}>{c}</th>
        ))}
        <th>Action</th>
        </tr>
       </thead>
       <tbody>
        {
          records.map((d,i)=>(
            <tr key={i}>
               <td>{d.id}</td>
               <td>{d.name}</td>
               <td>{d.Email}</td>
               <td>
                <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                <button onClick={e=> handleSubmit(d.id)}className="btn btn-sm ms-4 btn-danger">Delete</button>
               </td>
            </tr>
          ))
        }
       </tbody>
     </table>
    </div>
  );
  function handleSubmit(id){
    const conf = window.confirm("Do you want to delete it?");
    if(conf){
      axios.delete(`http://localhost:3001/users/${id}`)
      .then(res=>{
        alert('Record has been Deleted!');
        navigate('/')
      }).catch(err=>console.log(err))
    }
  }
}

export default App;
