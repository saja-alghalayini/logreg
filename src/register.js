import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {username,email,password,confirmPass, signup} from "./action";

function Signup(){
    const dispatch=useDispatch();
    const error=useSelector(state=>state.register);

    const handleSubmit=()=>{
      dispatch(signup());

    }
 return(


  
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>


  <div className="container h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2float-left">
                <img
                  src="https://midoshriks-school.netlify.app/assets/sing/imgs/login-form-img.png"
                  className="img-fluid"
                  alt="Sample image"
                  style={{height: '459px'}}
                />
              </div>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color:'#7A4495'}}>
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={()=>handleSubmit()}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" style={{color:'#7A86B6'}}/>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c" style={{color:'#937DC2'}}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        onChange={(e)=>dispatch(username(e.target.value))}
                      />
                      <span>{error.usernameError}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{color:'#7A86B6'}}/>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c" style={{color:'#937DC2'}}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        onChange={(e)=>dispatch(email(e.target.value))}
                      />
                      <span>{error.emailError}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" style={{color:'#7A86B6'}}/>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c" style={{color:'#937DC2'}}>
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        onChange={(e)=>dispatch(password(e.target.value))}
                      />
                      <span>{error.passError}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" style={{color:'#7A86B6'}}/>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd" style={{color:'#937DC2'}}>
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                        onChange={(e)=>dispatch(confirmPass(e.target.value))}
                      />
                       <span>{error.confirmPassError}</span>
                    </div>
                  </div>

                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />

                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>

                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  {(error.usernameError || error.emailError || error.passError || error.confirmPassError)
            ?<input type="submit"  defaultValue="Sign up" disabled/>
            :<input type="submit"  defaultValue="Sign up" style={{color:'#192294',borderColor:"#192294",borderRadius:"10px"}}/>
            }
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 )
}
export default Signup;