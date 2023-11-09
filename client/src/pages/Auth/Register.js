import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify'
const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')

    // form function
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name,email,password,phone,address);
        toast.success('register successfully');
    }


  return (
    <Layout title="Register">
      <div className="register">
        <h1>Register page</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            
            <input
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required

            />
          </div>

          <div class="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              required
            
           />
          </div>
          <div class="mb-3">
            
            <input
              type="text"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Phone"
              required

            />
          </div>
          <div class="mb-3">
          
            <input
              type="text"
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Address"
              required

            />
          </div>
           
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
