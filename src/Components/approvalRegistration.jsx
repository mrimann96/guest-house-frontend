import React, {useEffect, useState} from 'react'

export default function approvalRegistration() {

useEffect(()=> {
    fetch("http://localhost:4000/users/approved/pending")
    .then((res) => res.json())
    .then((data) => {console.log(data); })
    .catch((err) => console.log(err));
}, []);
  return (
    <div>
       
    </div>
  )
}
