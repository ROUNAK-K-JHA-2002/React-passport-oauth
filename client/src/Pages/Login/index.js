import React from 'react'
import {Container} from 'react-bootstrap'



function Login() {

    const GoogleAuth = ()=>{
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`,"_self")
}
  return (
  <>
   <Container>
    <h1 className='text-center'>Login Page</h1>
    <button onClick={GoogleAuth} className='btn btn-outline-primary'> Login with google </button>
   </Container>
  </>
  )
}

export default Login