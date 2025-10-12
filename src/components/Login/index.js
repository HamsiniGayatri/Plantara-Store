import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Navbar } from "../navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup ? "signup" : "login";

    const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/home"); // ✅ Redirect to Home page
    } else {
      alert(data.message);
    }
  };

  return (
    <><Navbar /><main className="login-container">
          <div className="login-card">
              <h2 className="login-title">{isSignup ? "Sign Up" : "Login"}</h2>
              <form onSubmit={handleSubmit}>
                  <label>UserName:</label>
                  <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username" />

                  <label>Password:</label>
                  <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password" />

                  <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
              </form>

              <p>
                  {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
                  <button onClick={() => setIsSignup(!isSignup)}>
                      {isSignup ? "Login here" : "Sign up here"}
                  </button>
              </p>
          </div>
      </main></>
  );
}

export default Login;
