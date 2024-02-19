import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add() {

    let navigate = useNavigate();
    let [name , setName] = useState('');
    let [fname , setFname] = useState('');
    let [phone , setPhone] = useState('');
    let [email , setEmail] = useState('');
    

    function handleAdd(e){
        e.preventDefault();
        axios.post('https://65d28a73987977636bfc6ca9.mockapi.io/std' , {
            sname : name ,
            sfname : fname,
            sphone : phone,
            semail : email
        }).then(()=>{
            navigate('/records')
        })
        ;

    }

  return (
    <>
      <div className="container bg-light mt-5">
        <div className="row">
          <h1 className="text-center mt-3">Add Records</h1>
          <form className="py-3" onSubmit={handleAdd}>
            <div className="row my-4">
              <div className="col-lg-7 col-10 mx-auto">
                <label htmlFor="">Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  onChange={(e)=>{setName(e.target.value)}}
                  placeholder="Enter Your Name"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-7 col-10 mx-auto">
                <label htmlFor="">Father Name</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  onChange={(e)=>{setFname(e.target.value)}}
                  placeholder="Enter Your Father Name"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-7 col-10 mx-auto">
                <label htmlFor="">Phone No.</label>
                <input
                  className="form-control"
                  type="tel"
                  required
                  onChange={(e)=>{setPhone(e.target.value)}}
                  placeholder="Enter Contact Number"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-7 col-10 mx-auto">
                <label htmlFor="">Email</label>
                <input
                  className="form-control"
                  type="email"
                  required
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder="Enter Your Email"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="row">
                <div className="col-7 mx-auto">
                <button type="submit" className=" btn btn-primary form-control"> Submit</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Add;
