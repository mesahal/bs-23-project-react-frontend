// Importing necessary modules and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.module.css";

// Login functional component
function Login() {
  // State variables for managing username, password, and navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle login form submission
  async function login(event) {
    event.preventDefault();
    try {
      // Sending a POST request to the login API endpoint
      await axios.post("http://localhost:8080/api/login", {
        userName: username,
        password: password,
      }).then(
        // Handling the response from the server
        (res) => {
          console.log(res.data);

          // Checking the response data for different scenarios
          if (res.data.message === "Email not exits") {
            alert("Email not exists");
          } else if (res.data.status === true) {
            // If login is successful, navigate to the tasks page
            navigate("/tasks");
          } else {
            // If login fails, display an alert with the error message
            alert(res.data.message);
          }
        },
        // Handling any failures in the API request
        (fail) => {
          console.error(fail);
        }
      );
    } catch (err) {
      // Handling any unexpected errors during the login process
      alert(err);
    }
  }

  // Function to navigate to the registration page
  async function register(event) {
    navigate("/register");
  }

  // Render the login form
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-6">
            {/* Login form */}
            <form>
              {/* Input field for username */}
              <div className="form-group">
                <label>Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>

              {/* Input field for password */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              {/* Login button */}
              <button type="submit" className="btn btn-primary" onClick={login}>
                Login
              </button>

              {/* Registration button */}
              <button type="submit" className="btn btn-primary" onClick={register}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the Login component for use in other parts of the application
export default Login;
