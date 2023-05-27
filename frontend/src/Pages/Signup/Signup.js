import React, { useState } from 'react'
import { useSignup } from '../../Hooks/useSignup';


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const { signup, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(email,password)
    await signup(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <div>
      <h1>Signup</h1>
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

export default Signup