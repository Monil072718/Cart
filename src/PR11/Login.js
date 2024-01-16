import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const apiFetch = () => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };
  useEffect(() => {
    apiFetch();
  }, []);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = users.filter(
      (item) => item.email === input.email && item.password === input.password
    );
    if (currentUser) {
      fetch("http://localhost:5000/currentUser", {
        method: "POST",
        body: JSON.stringify(currentUser[0]),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      navigate("/Home");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
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
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </>
  );
};

export default Login;
