import React from 'react'

function LoginPage() {
  return (
    <section className='sec-login'>
      <div className='div-login'>
        <div className='div-login1'>
          
        </div>
        <div className='div-login2'>
          <div className='div-login3'>
            <div className='div-login4'>
              <p className='kitchen1'>Chuks Kitchen</p>
              <p className='login-acc'>Login your Account</p>
            </div><br />
            <p className='number'>Email or phone number</p>
           <div className='email'>
            <div className='email1'>
              <img className='emailimg' src="/email.png" alt="" />
            </div>
            
              <input className='input-email' type="text" placeholder='name@gmail.com' />
           </div><br />
           <p className='number'>Password</p>
           <div className='password'>
            <div className='password1'>
              <img className='passwordimg' src="/Icons.svg" alt="" />
              <small className='passwordkey'>********</small>
            </div>
            <div className='password2'>
              <img className='hide' src="/hide.png" alt="" />
            </div>
           </div>
           <div className='forgot'>
            <div className='forgot1'>
              <small>Forgot Password?</small>
            </div>
           </div>
           <div className='loginbtn'>
            <p>Continue</p>
           </div>
           <div className='contiwith'>or continue with</div>
           
           <div className='google'>
            <img className='googleimg' src="/Social Media.png" alt="" />
            <p className='conti'>Continue with Google</p>
           </div>
           <div className='facebook'>
            <img className='googleimg' src="/facebook.png" alt="" />
            <p className='conti'>Continue with Facebook</p>
           </div>
           <div className='create'><p className='createacc1'>Don’t have an account? <span className='createacc'>Craete an account</span></p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage