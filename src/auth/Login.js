import '../css/main.css'
import Footer from '../Footer'
function Login() {
  return (
    <>
      <div className="Login container-fluid m-0 ">
        <div className='row justify-content-center align-items-center'>
          <div className='col-sm-3 shadow rounded login-form'>
              <h1 className='d-flex justify-content-center mb-5 mt-5'>Login</h1>
              <form>
                  <div className='m-4 d-flex'>
                    <input type='text' name='username' placeholder='Username'className='form-control'/>
                  </div>
                  <div className='m-4 d-flex'>
                    <input type='password'name='password' placeholder='Password' className='form-control'/>
                  </div>
                  <div className='mb-4 d-flex justify-content-center'>
                    <a href='#'>Forgot your password?</a>
                  </div>
                  <div className='mb-5 d-flex justify-content-center'>
                    <button className='btn btn-primary shadow-sm'>Login</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
