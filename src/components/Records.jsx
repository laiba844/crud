import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Record(){
    let [apiData , setApidata] = useState([]);

    function view(){
        axios.get('https://65d28a73987977636bfc6ca9.mockapi.io/std').then((resp)=>{
            setApidata(resp.data)
            
        })
    }
    useEffect(()=>{
        view();
    } , [])

    let handleEdit = (id , name  , fname , phone , email)=>{
        localStorage.setItem("id" , id);
        localStorage.setItem("name" , name);
        localStorage.setItem("fname" , fname);
        localStorage.setItem("phone" , phone);
        localStorage.setItem("email" , email);
    }

    const handleDelete = (id) =>{
        axios.delete(`https://65d28a73987977636bfc6ca9.mockapi.io/std/${id}`).then(()=>{
            view();
            confirm("Are You Sure?")
        })
    }
   


    return(
        <>
        <div className="container">
            <h1 className="text-center mt-3">Registered Records</h1>
            <Link to="/"  className="btn  btn-primary mx-5"> Add New Records </Link>
        <div className="row">
            <table className="table table-striped table-hover my-5">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
               <tbody>
                {
                    apiData.map((item)=>(
                        <tr key={item.id}>
                            <td> {item.id} </td>
                            <td> {item.sname} </td>
                            <td> {item.sfname} </td>
                            <td> {item.sphone} </td>
                            <td> {item.semail} </td>
                            <td><Link to="/edit-record" onClick={()=>{handleEdit(item.id , item.sname , item.sfname , item.sphone , item.semail)}} className="btn btn-primary btn-sm mt-1">Edit</Link> <Link onClick={()=>{handleDelete(item.id)}}  className="btn btn-danger btn-sm mt-1" to="/records" >Delete</Link> </td>
                        </tr>
                    ))
                }
                
               </tbody>
            </table>
        </div>
        </div>
        </>
    )
}
export default Record;