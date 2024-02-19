import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit(){
    let navigate = useNavigate();

    let [id , setId] = useState("");
    let [name , setName] = useState("");
    let [fname , setFname] = useState("");
    let [phone , setPhone] = useState("");
    let [email , setEmail] = useState("");

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setFname(localStorage.getItem('fname'));
        setPhone(localStorage.getItem('phone'));
        setEmail(localStorage.getItem('email'));
    } , []);

    let handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://65d28a73987977636bfc6ca9.mockapi.io/std/${id}` , {
            sname : name ,
            sfname : fname,
            sphone : phone,
            semail : email
        }).then(()=>{
            navigate('/records')
        })
    }

    console.log(name)


    return(
        <>
      <div className="container bg-light mt-5">
        <div className="row">
          <h1 className="text-center mt-3">Update Record</h1>
          <form className="py-3" onSubmit={handleUpdate} >
            <div className="row my-4">
              <div className="col-lg-7 col-10 mx-auto">
                <label htmlFor="">Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(a) => setName(a.target.value)}
                  name="sname"
                  id="name"
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-7 col-10 mx-auto">
                <label htmlFor="">Father Name</label>
                <input
                  className="form-control"
                  type="text"
                  
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter Your Father Name"
                  name="sfname"
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
                 
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Contact Number"
                  name="sphone"
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
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  name="semail"
                  id=""
                />
              </div>
            </div>

            <div className="row my-2">
                <div className="col-7 mx-auto">
                <Link type="submit" to="/records" className=" btn btn-primary form-control"> Back</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-7 mx-auto">
                <button type="submit" className=" btn btn-primary form-control"> Update</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
    )
}
export default Edit;