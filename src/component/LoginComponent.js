import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/login", {
          userName: username,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.status == true) {
              navigate("/tasks");
            } else {
              alert(res.data.message);
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }
  async function register(event) {
    navigate("/register");
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-6">
            <form>
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

              <div className="form-group">
                <label>password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Fee"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={login}>
                Login
              </button>
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

export default Login;
