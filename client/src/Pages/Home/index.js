import React from 'react'
import {Container} from 'react-bootstrap'



function Home(userDetails) {
    const user = userDetails.user;
    const logout = ()=>{
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`,"_self")
}

  return (
  <>
   <Container>
    <h1 className='text-center'>Login Page</h1>
   <div>
   <img src={user.picture} alt="profile"/>
    <h6>{user.name}</h6>
    <h6>{user.email}</h6>
    <button onClick={logout} className='btn btn-outline-primary'>logout</button>
   </div>
   </Container>
  </>
  )
}

export default Home