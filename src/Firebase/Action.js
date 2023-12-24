import React, { useEffect, useState } from "react";
import { doc  ,collection , getDoc, getDocs } from "firebase/firestore";
import { db } from  "./Firebase"
const Action = () => {
    const [user , setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    }, [])
    function getUsers(){
        const userCollectionRef = collection(db , 'user')
        getDocs (userCollectionRef)
        .then(res =>{
            console.log(res.docs)
            
        })
    }
  return (
    <>
      <label htmlFor="">Username</label>
      <input type="text" /> <br />
      <br />
      <label htmlFor="">Password</label>
      <input type="password" />
    </>
  );
};

export default Action;
