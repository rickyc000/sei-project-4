import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../utils/useForm'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'

function Login() {
  const history = useHistory()
  const [error, setError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
      setError(false)
      history.push('/')
    } catch (err) {
      setError(true)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <div className="login-box-wrapper">

      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email</label>
            <div>
              <input
                className="input"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formdata.email}
                onFocus={handleFocus}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <div>
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formdata.password}
                onFocus={handleFocus}
              />
            </div>
            {error && <p>Incorrect</p>}
          </div>
          <div className="login-button-wrapper">
            <button type="submit" className="login-button">Log In</button>
          </div>
        </form>
      </div>
    </div>


  )


}


export default Login