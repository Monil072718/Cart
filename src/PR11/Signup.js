import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      navigate('/Login')
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
      <div className="form-control">
          <label for="exampleInputEmail1" className="mb-2">Enter your Name</label>
          <input
            type="email"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email" 

            name="name"
            onChange={handleChange}
          />
        </div>
        
        <div className="form-control">
          <label for="exampleInputEmail1" className="mb-2">Email address</label>
          <input
            type="email"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email" 

            name="email"
            onChange={handleChange}
          />
        </div>
        
        <div class="form-group">
          <label for="exampleInputPassword1" className="mt-2">Password</label>
          <input
            type="password"
            className="form-control mt-2"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary mt-3"> Submit</button>
      </form>
    </>
  );
};

export default Signup;
