import React from 'react'
import {Container} from 'react-bootstrap'



function Home(user) {
    const profile = user.user;
    const logout = ()=>{
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`,"_self")
}
console.log("profile :  " + profile)
  return (
  <>
   <Container>
    <h1 className='text-center'>Home Page</h1>
   <div>
    <img src={profile.picture} alt="profile"/> 
     <h6>{profile.name}</h6>
    <h6>{profile.email}</h6> 
    <button onClick={logout} className='btn btn-outline-primary'>logout</button>
   </div>
   </Container>
  </>
  )
}

export default Home