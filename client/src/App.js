import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes ,Route , Navigate} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() { 
  const [user, setuser] = useState(null)
  
 const getUser = async()=>{
  try {
    const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
   await axios.get(url,{ withCredentials: true}).then((response)=>{
    const res = response.data._json
    console.log(res)
      setuser(res)
    })

  } catch (error) {
    console.log(error);
  }
 }
 useEffect(() => {
		getUser();
	}, []);


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
