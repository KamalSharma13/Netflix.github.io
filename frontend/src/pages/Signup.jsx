import React from 'react'
import styled from 'styled-components'
import Background from '../Components/Background'
import Header from '../Components/Header'
import { useState } from 'react'
import { async } from '@firebase/util'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { firebaseauth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate =useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [values,setvalues] =useState(
    {
      email:"",
      password:""
    }
  )
  const handlesubmit= async()=>{
 console.log(values)
    try {
      const{email,password } = values;
      await createUserWithEmailAndPassword(firebaseauth,email,password)
    } catch (error) {
      console.log(error)
    }

  }
  onAuthStateChanged(firebaseauth,(currentUser)=>{
    if(currentUser){
      navigate('/')
      
    }
  })


  const formvalid = (e)=>{
    setvalues(
    {...values,[e.target.name]:e.target.value}
  )}
  return (
    <Container showPassword ={showPassword}>
      <Background/>
      
      <div className="content">
      <Header login/>
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited Movies ,TV shows and many more</h1>
          <h4>Watch anywhere .Cancel anytime</h4>
          <h6>Ready to Watch? Enter your email to create or restart membership</h6>
        </div>
        <div className="form">
          <input type="email"  value={values.email} placeholder='email address' onChange={formvalid} name ='email' />
          {showPassword &&(
          <input type="password" value={values.password} placeholder='password' onChange={formvalid} name='password' />)
          }
          {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button type='submit' onClick={handlesubmit} >Signup</button>}
        </div>
      </div>

    </Container>
    
  )
}


const Container =styled.div`
position:relative;
.content{
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.5);
  height:100vh;
  width:100vw;
  display:grid;
  grid-template-rows:15vh 85vh;

  .body {
      gap: 1rem;
      color: white;
      .text {
        gap: 2rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 20rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 50%;
        input {
          color: black;
          border: none;
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
          border-radius: 2rem;
        }
      }
      button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
          border-radius: 2rem;
        }
     



      

    }}
`
export default Signup