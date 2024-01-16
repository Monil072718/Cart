import React, { useState, useEffect } from 'react';
import { app, database } from '../firebase/Realtimefirebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { onValue, ref } from 'firebase/database';

const Dash = () => {
  const db = getFirestore(app);
  const [user, setUser] = useState([])
  const [pc, setPc] = useState([])
  const [assign, setAssign] = useState([])
  const userdispatch = useDispatch();
  useEffect(() => {
    assignList();
    addPc();
    userList();
  }, []);


  const addPc = () => {
    const userRef = ref(database, "pc");
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
            setPc(list)
        } else {
            console.log("data not Found")
        }
    });
}
const userList = () => {
    const userRef = ref(database, "user");
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const list = [];
        if (data) {
            const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
            setUser(list)
        } else {
            console.log("data not Found")
        }

    });
}
const assignList = () => {
    const userRef = ref(database, "assign");
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const list = [];
        if (data) {
            const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
            setAssign(list)
        } else {
            console.log("data not Found")
        }

    });
}


  return (
    <>
      <div>
        <h1 className='h1 text-center mt-3'> Dashbord </h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col shadow p-2 mb-5 me-2  rounded bg-warning text-center">
              <h1 className="text-center text-dark"> {user && user.length}</h1>
              <Link to={"/user"} className="text-center text-decoration-none text-dark">View User</Link>
              <h4 className='text-dark'>Total User</h4>
            </div>
            <div className="col shadow p-2 mb-5 me-2  bg-success rounded text-center">
              <h1 className="text-center text-white"> {pc && pc.length}</h1>
              <Link to={"/viewpc"} className="text-center text-decoration-none text-white">View Pc</Link>
              <h4 className='text-white'>Total pc</h4>
            </div>
            <div className="col shadow p-2 me-2 mb-5 bg-secondary rounded text-center">
              <h1 className="text-center text-white"> {assign && assign.length}</h1>
              <Link to={"/viewassign"} className='text-decoration-none text-center text-white'>View Assign Pc</Link>
              <h4 className='text-white'>Assign pc</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
