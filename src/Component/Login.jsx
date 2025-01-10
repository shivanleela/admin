import "./Login.css"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import img from "../assets/Chennai-Unit.png"


const Login = ({ setIsLoggedIn }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin123") {
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container-fluid vh-50 align-items-center justify-content-center" style={{backgroundImage:
      `url(${img})`,
  height: "100vh",
  marginTop: "60px",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"}}>
      <div className="row shadow-lg bg-white rounded-4 m-auto w-75 mt-5">
        <div className="col-md-6 p-5 w-45">
          <h2 className="text-center mb-4" style={{ color: "#baa0cd" }}>Login to Dashboard</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <div className="mb-3">
              
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                id="username"
                placeholder="Name-admin"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <div className="invalid-feedback" style={{ color: 'red' }}>
                  <p style={{fontSize:"20px"}}>{errors.username.message}</p>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                  placeholder="Password-admin123"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && (
                <div className="invalid-feedback" style={{ color: 'red' }}>
                 <p style={{fontSize:"20px"}}>{errors.password.message}</p> 
                </div>
              )}
            </div>

            {/* Login Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary mt-1">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
