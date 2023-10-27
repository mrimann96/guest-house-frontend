import React, {useEffect, useState} from 'react'
import SideBar from "./SideBar"

import Table from "./Table";


import "../style/approve.css"

const userDetail = ({userId}) => {
 const [user, setUser] = useState(null);
 useEffect(()=> {
       fetch(`http://localhost:4000/users/${userId}`)
       .then((res) => res.json())
       .then((data) => {
        console.log(data);
        setUser(user);
       })
       .catch((err) => console.log(err));
 }, []);


  return (
   
    
        
          <div className="container rounded-4" >
            <div className="card rounded-4 w-100" >
                <div className="card-header rounded-4" style = {{backgroundColor : '#0275d8', color : 'white', border : '5px solid #0275d8'}}>   
                    <h1>USER PROFILE</h1>

                    {
                        user && <>
                        <h3>Hello, {user.name}</h3>
                        <p>Email: {user.email} </p>
                        <p>Address: {user.address}</p>
                        <p>Phone: {user.phone} </p>
                        <p></p>
                        </>
                    }

                </div>
            
            <div className = "card-body">
    
            <div class="d-flex flex-row bd-highlight mb-2">
             <div class="p-2 bd-highlight">
                <SideBar/>
             </div>
             <div class="p-2 bd-highlight" className="table2">
                <h1 className="bookingTable">BOOKINGS HISTORY</h1>
                <div className="t">
                <Table/>
                </div>
             </div>
             
            </div>
                {/* <div>
                 <SideBar/>
                 </div>
                 
                 <div>
                 <Table/>
                </div> */}
             
            </div>
            
                </div>
          </div>
        
   
  
  )
}

export default userDetail