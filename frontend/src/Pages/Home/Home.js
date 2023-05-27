import React from 'react'
import { useLogout } from '../../Hooks/useLogout'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'


const Home = () => {
  const {logout} = useLogout()
  const handle_Delete = () =>{
    logout()
  }
  return (
    <div>
        <Signup/>
        <br/>
        <button onClick={handle_Delete}>Logout</button>
        <br/>
        <Login/>

    </div>
  )
}

export default Home