import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes ,Route , Navigate} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home'
import Login from './Pages/Login'
function App() { 

 const [user, setuser] = useState(null)

 const getUser = async()=>{
  try {
    const url = `${process.env.REACT_APP_API_URL}/auth/login/success`
    const {data} = await axios.get(url,{withCredentials : true})
    setuser(data.user.json)
  } catch (error) {
    console.console.log(error);
  }
 }

  return (
    <Container>
      <Routes>
        <Route exact  path ='/' element={user? <Home user={user}/> : <Navigate to='/login' />} />
        <Route exact  path ='/login' element={user?  <Navigate to='/' /> : <Login/>} />
      </Routes>
    </Container>
  );
}

export default App;
