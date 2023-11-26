import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './UserReducer';

export const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const existingUser = users.find((user) => user.id === Number(id));
  const { name, email } = existingUser;
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: Number(id),
      name: uname,
      email: uemail,
    }));
    navigate('/');
  };

  return (
    <>
      <div className='d-flex w-100 mt-5 justify-content-center align-item-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                value={uname}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control'
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className='btn btn-info'>Update</button>
          </form>
        </div>
      </div>
    </>
  );
};
