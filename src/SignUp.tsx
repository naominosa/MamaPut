import React, { useState } from 'react'
import chef from './assets/chefshat.gif'
import { Link } from 'react-router-dom'
import GeneralInput from './GeneralInputs'
import './SignUp.css'

function SignUp() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [tel, setTel] = useState("")

  const handleFullname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
    
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setconfirmPassword(event.target.value)
  }

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value)
  }

  return (
    <div className='Sign-UP-page'>
      <div className='top-side'>
        <div className='login-img'>
            <img src={chef} className='chefs' style={{height:'162px'}} />
        </div>
      <div className='Links'>
        <Link className='login-Link' to='/Login'>Login</Link>
        <Link className='sign-Link' to='/SignUp'>Sign-up</Link>
    </div>
    </div>
    
    <div className='sign-down-section'>
      <div className='fields'>
      <div className='name-field'>
        <GeneralInput 
        id='fullname'
        label='Fullname'
        placeholder='Last Name first'
        type='text'
        onChange={handleFullname}
        value={fullname}
        />
      </div>
      
      <div className='email-field'>
        <GeneralInput
        id='email'
        label='Email'
        placeholder='Enter your email'
        type='email'
        onChange={handleEmailChange}
        value={email}
        />
      </div>
      
      <div className='password-field'>
        <GeneralInput
        id='password'
        label='Password'
        placeholder='Enter your Password'
        type='password'
        onChange={handlePasswordChange}
        value={password}
        />
      </div>
      
      <div className='confirmPasssword-field'>
        <GeneralInput
        id='confirmPassword'
        label='Confirm Password'
        placeholder='Confirm your Password'
        type='password'
        onChange={handleConfirmPassword}
        value={confirmPassword}
        />
      </div>
      
      <div className='tel-field'>
        <GeneralInput
        id='tel'
        label='Telephone'
        placeholder='Enter your Number'
        type='tel'
        onChange={handleTelChange}
        value={tel}
        />
      </div>
      <Link className='forgot' to='./ForgottenPassword'> Forgot passcode? </Link>
      </div>
    </div>
    </div>
  )
}

export default SignUp