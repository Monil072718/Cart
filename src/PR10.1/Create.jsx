import React from 'react';
import { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Check if there are existing users
    dispatch(addUser({ id: newUserId, name, email }));
    navigate('/');
  };

  return (
    <>
      <div className='d-flex w-100 mt5 justify-content-center align-item-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <h3>Add new User</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className='btn btn-info'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
