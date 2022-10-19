import '../css/style.css'
import Footer from './footer'
function Login() {
  return (
    <>
      <div class="login">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
              <div class="form-container">
                <h3 class="title">Login</h3>
                <form class="form-horizontal">
                  <div class="form-icon">
                    <i class="bi bi-person-circle"></i>
                  </div>
                  <div class="form-group">
                    <span class="input-icon"><i class="bi bi-person-fill"></i></span>
                    <input type="text" class="form-control" placeholder="Username" />
                  </div>
                  <div class="form-group">
                    <span class="input-icon"><i class="bi bi-lock-fill"></i></span>
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>
                  <button class="btn signin">Login</button>
                  <span class="forgot mt-3 text-center">Contact your admin for any help needed.</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
