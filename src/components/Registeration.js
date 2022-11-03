import React from "react";
import '@fortawesome/react-fontawesome';
import {  Modal,  } from 'reactstrap';
// import { Link, Router } from "react-router-dom"; 
// import { Icons } from "react-icons/fa";

// import {Route} from 'react-router-dom';
// import PropTypes from 'prop-types';
import  { useState } from 'react';

function Registration(args) {
    const [loginFormData]= React.useState({
        email:"",
        password:""
      })
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);
      
  //  const navigate = useNavigate();

  // const navigateToTermsandConditions = () => {
    
  //   navigate('/TermsandConditions');
  // };
  // const closeBtn = (
  // <button className="close" onClick={toggle} type="button">&times;</button>
  // )
     
    return(
      
        <div className="row">
         <div className=" col-md-8 p-0 color">
             <div className="mb-0 head text-light d-flex flex-column justify-content-end pb-5 ps-5 ">
               <h2 className=" fw-bold">Signup with Sosin Classes</h2> 
                <h4 className=" fw-bold">Home</h4>
              </div>
          </div>
    
           <div className=" col-md-4 ">

           <div className=" d-flex align-items-center justify-content-center " >
            <img src= {require("../assests/logo.png")} className="rounded-circle" alt=""/>
             <h6 className="login text-center fw-bolder pt-3"> Sosin<br/>Classes</h6>
           </div>

          <h4 className=" text-center">Create Your Account </h4>
          
          <form className="" >
              <div className=" col-mb-5 mx-3 mt-1">
                <label htmlFor="email"className="form-label fw-semibold ">Email Id/ User Name</label>
                {/* <div className = "input-group with-icon icon-shy"> */}
                <input type="email" className="form-control " id="exampleInputEmail1" placeholder="eg:test@test.com "
                  aria-describedby="emailHelp" name="email" value={loginFormData.email}   />
                 {/* <i className="fa-solid fa-user"></i>

                  </div> */}
              </div>
              < div className=" col-mb-5 mx-3">
                <label htmlFor=""className="form-label fw-semibold "> Name</label>
                <div className = "input-group with-icon icon-shy">
                <input type="text" className="form-control " id="exampleInput" placeholder="eg:jhon "></input>  
                <i className="fa-regular fa-user"></i>  
                </div>
              </div>

              <div className=" col-mb-5 mx-3 ">
                <label htmlFor=""className="form-label fw-semibold ">Mobile No</label>
                <input type="" className="form-control " id="exampleInputnumber" placeholder="eg:jhon "/>
                <i className="fa-regular fa-eye"></i>
              </div>

              <div className="col-mb-5 mx-3">
                <label htmlFor="password"className="form-label fw-semibold">Password</label>
                <div className = "input-group with-icon icon-shy">
                <input type="password" className="form-control" id="exampleInputPassword1"placeholder="**********"
                  name="password" value={loginFormData.password}/>
                  <i className="fa-regular fa-user"></i>
                  </div>
              </div>
              <div className="col-mb-5 mx-3">
                <label htmlFor="password"className="form-label fw-semibold">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"placeholder="**********"
                  name="password" value={loginFormData.password}/>
              </div>
              
              <div>
              <p className="pt-2">
             <input type= "checkbox"></input>
             <span className="text mx-2 mt-4 space" >Agree to all</span><span className="login space" >terms and conditons</span>
             </p>
             </div>
             
            </form> 
            <div className="">
             <button type="button " className="rounded-pill d-grid gap-2 col-6 mx-auto  red" data-bs-target="toggle" onClick={toggle}>Register Now</button>
            </div>
            <p className="text-center text " > I am already a Member? <span className = "login">Login</span>  </p>
             <p className="text-center text" >© Erasmus Training Services Pvt. Ltd.2022</p>     
      </div>
      <div>
      
      
     <div className=" modal ">
          <Modal  isOpen={modal} toggle={toggle}>
        
        <div className="modal-dialog">
          {/* <p className="point" style="cursor:pointer;">X</p> */}
           <div>
            <h1 className="modal-title text-center fs-5" id="exampleModalToggleLabel">Verify Your Account</h1>
             < p  className=" text-center"> Enter the OTP sent to your registered phone number </p>
            </div>
              <form className="row-g-3 d-grid gap-3 ">
             <div className="col-mb-2 mx-3">
                <label htmlFor="number"className="form-label fw-semibold  mt-1">Enter Otp sent to Mobile </label>
                <input className="form-control" id="exampleInputPassword1"placeholder="phone otp"/>
              </div>

              <div className="col-mb-2 mx-3">
                <label htmlFor="number"className="form-label fw-semibold  mt-1"> Enter Otp sent to Email </label>
                <input  className="form-control" id="exampleInputPassword1"placeholder="email otp"/>
              </div>

               <div className="mt-3 ">
                 <button type="button " className="rounded-pill d-grid gap-2 col-6 mx-auto  red" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">verify</button>
                 </div>

             </form>
              
             </div>
      </Modal>
    </div>
    </div>
  </div>   
           

       
    );    
}
export default Registration;