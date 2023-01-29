import React,{useContext, useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import '../assets/css/SignUp.css'
import { UserContext } from '../contexts/UserContext'

function SignIn() {
  const [loginInfo, setLoginInfo] = useState({})

  const {loginFunction, successMessage, isLoggedin} = useContext(UserContext)
  const handleLoginData = (name) =>(event)=>{
    setLoginInfo({...loginInfo, [name] : event.target.value})
  }

  const loginUser = ()=>{
    loginFunction(loginInfo)
  }
  // useEffect(()=>{
  //   if(isLoggedin){
  //     <Navigate replace to={'/'} />
  //   }
  // }, [isLoggedin])

  return (
    <div>
      <section class="vh-100 bg-image">
        {console.log(successMessage)}
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{borderRadius: "15px"}}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login</h2>

                    <form onSubmit={(e) =>[e.preventDefault(), loginUser()]}>
                      {/* <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">Your Name</label>
                        <input required type="text" id="form3Example1cg" onChange={handleLoginData('name')} class="form-control form-control-lg" />
                      </div> */}

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                        <input required type="email" id="form3Example3cg" onChange={handleLoginData('email')} class="form-control form-control-lg" />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">Password</label>
                        <input required type="password" id="form3Example4cg" onChange={handleLoginData('password')} minLength={8} class="form-control form-control-lg" />
                      </div>

                      <div class="d-flex justify-content-center">
                        <button type="submit"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn