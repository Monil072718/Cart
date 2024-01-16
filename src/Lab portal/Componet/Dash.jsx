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
        <h1 className='h1'> Dashbord </h1>
        <div className="container">
          <div className="row">
            <div className="col-4 shadow p-3 mb-5 bg-white rounded text-center">
              <h1 className="text-center"> {user && user.length}</h1>
              <Link to={"/user"} className="text-center">View User</Link>
              <h4>Total User</h4>
            </div>
            <div className="col-4 shadow p-3 mb-5 bg-white rounded text-center">
              <h1 className="text-center"> {pc && pc.length}</h1>
              <Link to={"/viewpc"} className="text-center">View Pc</Link>
              <h4>Total pc</h4>
            </div>
            <div className="col-4 shadow p-3 mb-5 bg-white rounded text-center">
              <h1 className="text-center"> {assign && assign.length}</h1>
              <Link to={"/viewassign"}>View Assign Pc</Link>
              <h4>Assign pc</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
