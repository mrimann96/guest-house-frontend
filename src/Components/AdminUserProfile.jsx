import React, {useState, useEffect} from 'react'

const AdminUserProfile = ({admin}) => {
  const [adminInfo, setAdminInfo] = useState(null);
useEffect(()=> {
fetch(`http://localhost:4000/login/admin/${admin}`)
.then((res) => res.json())
.then((data) => {
  console.log(data);
setAdminInfo(data);
})
.catch((err) => console.log(err));

}, []);
  return (

    <>
    <div>AdminUserProfile</div>
    {adminInfo && `Welcome ${adminInfo.email}` }
    </>
    
  )
}

export default AdminUserProfile