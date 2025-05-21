import React, { useState } from 'react'
import chef from './assets/chefshat.gif'
import './Login.css'
import { Link } from 'react-router-dom'
import GeneralInput from './GeneralInputs'
import {auth,googleProvider} from '../src/Firebase-config/firebase'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

const Navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const signin = async ()=>{
        try{
await createUserWithEmailAndPassword(auth,email,password)
        Navigate('/ThirdScreen')
        }catch(err){
            console.log(err)
        }
        

    }
    const signinwithgoogle = async ()=>{
        try{
await signInWithPopup(auth,googleProvider)
        Navigate('/ThirdScreen')
        }catch(err){
            console.log(err)
        }
        

    }
    const logout = async ()=>{
        try{
await signOut(auth)
        }catch(err){
            console.log(err)
        }
        

    }

    return (
        <div className='Login-page'>
            <div className='top-side'>
                <div className='login-img'>
                    <img src={chef} className='chefs' style={{height:'162px'}} />
                </div>
                <div className='Links'>
                    <Link className='login-Link' to='/Login'>Login</Link>
                    <Link className='sign-Link' to='/SignUp'>Sign-up</Link>
                </div>
            </div>
            <div className='down-section'>
                <div className='fields'>
                    <div className='email-field'>
                        <GeneralInput 
                            label='Email address'
                            placeholder='Enter your email'
                            id='email'
                            onChange={handleEmailChange}
                            type='email'
                            value={email}
                        />
                    </div>
                    <div className='password-field'>
                        <GeneralInput
                            label='Password'
                            placeholder='Enter your password'
                            id='password'
                            onChange={handlePasswordChange}
                            type='password'
                            value={password}
                        />
                    </div>
                    <Link className='forgot' to='./ForgottenPassword'> Forgot passcode? </Link>
                </div>
            </div>
            <button onClick={signinwithgoogle} >signinwithgoogle</button>
           <button onClick={logout} >logout</button>
            <button onClick={signin} >sign in</button>
        </div>

    )
}

export default Login