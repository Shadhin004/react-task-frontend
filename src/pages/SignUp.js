import React,{useState} from 'react'
import '../assets/css/SignUp.css'

function SignUp() {
  const [registrationInfo, setRegistrationInfo] = useState({})
  const handleRegistrationData = (name) =>(event)=>{
    setRegistrationInfo({...registrationInfo, [name] : event.target.value})
  }
  return (
    <div>
      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{borderRadius: "15px"}}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                    <form>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">Your Name</label>
                        <input required type="text" id="form3Example1cg" onChange={handleRegistrationData('name')} class="form-control form-control-lg" />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                        <input required type="email" id="form3Example3cg" onChange={handleRegistrationData('email')} class="form-control form-control-lg" />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">Password</label>
                        <input required type="password" id="form3Example4cg" onChange={handleRegistrationData('password')} minLength={8} class="form-control form-control-lg" />
                      </div>

                      <div class="d-flex justify-content-center">
                        <button type="submit"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                          class="fw-bold text-body"><u>Login here</u></a></p>

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

export default SignUp