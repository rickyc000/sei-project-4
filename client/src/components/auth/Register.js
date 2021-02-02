import React from 'react'
import useForm from '../utils/useForm'
import { registerUser } from '../lib/api'
import { useHistory } from 'react-router-dom'


function Register() {
  const history = useHistory()
  const { formdata, errors, handleChange, setErrors } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    // console.log(await registerUser(formdata))

    // console.log(formdata)
    try {
      console.log(formdata)
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      console.log(err.response)
      setErrors(err.response.data)
    }
  }

  console.log(formdata)


  return (
    <div className="login-box-wrapper">

      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              className="input"
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={formdata.username}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="input-wrapper">
            <label>Email</label>
            <div>
              <input
                className="input"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formdata.email}
              />
            </div>
            {errors.email && <p>{errors.email}</p>}
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
              />
            </div>
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="input-wrapper">
            <label>Password Confirmation</label>
            <div>
              <input
                className="input"
                type="password"
                placeholder="Password Confirmation"
                onChange={handleChange}
                name="passwordConfirmation"
                value={formdata.passwordConfirmation}
              />
            </div>
            {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
          </div>

          <div className="login-button-wrapper">
            <button type="submit" className="login-button">Register</button>
          </div>
          {/* {errors.email && <p>Error logging in</p>} */}
        </form>

      </div>

    </div>
  )


}


export default Register