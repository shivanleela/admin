import  { useState } from "react";
import img from '../assets/character-flat-drawing-businesswoman-looking-from-behind-open-door-woman-peeking-of-door-and-wave-hands-cheerful-female-standing-in-doorway-waiting-guest-to-come-cartoon-design-illustration-vector.jpg'


const Login = ({ setIsLoggedIn }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container-fluid vh-50  align-items-center justify-content-center ">
    <div className="row shadow-lg bg-white rounded-4 m-auto w-75 mt-5">
    
      <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center text-white  w-30">
        <img
          src={img} 
          alt="Illustration"
          className="img-fluid  h-75"

        />
      </div>

     
      <div className="col-md-6 p-5 w-45">
        <h2 className="text-center mb-4" style={{color:"#baa0cd"}}>Login to Dashboard</h2>
        <form>
          {/* Email Address */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
             value={loginData.username}
             onChange={(e) =>
               setLoginData({ ...loginData, username: e.target.value })
             }
              type="name"
              className="form-control"
              id="email"
              placeholder="Name"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>


          {/* Login Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mt-1" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  );
};

export default Login;

























