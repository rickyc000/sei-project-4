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
    console.log(formdata)
    event.preventDefault()

    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <label>Username</label>
        <input
          placeholder="Username"
          onChange={handleChange}
          name="username"
          value={formdata.username}
        />
        {errors.username && <p>{errors.username}</p>}

        <div className="field">
          <label>Email</label>
          <div>
            <input
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formdata.email}
            />
          </div>
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formdata.password}
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label>Password Confirmation</label>
          <div>
            <input
              type="password"
              placeholder="Password Confirmation"
              onChange={handleChange}
              name="passwordConfirmation"
              value={formdata.passwordConfirmation}
            />
          </div>
          {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
        </div>

        <div>
          <button type="submit">Register</button>
        </div>

      </form>



    </div>
  )


}


export default Register