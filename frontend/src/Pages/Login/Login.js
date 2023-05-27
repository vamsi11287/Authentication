import React, { useState } from 'react'
import { useLogin } from '../../Hooks/useLogin';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const { login, error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(email,password)
    await login(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}
          value={email} /><br />
        <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}
          value={password} /><br />

        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login