// import { useState, useMemo, useCallback, useEffect } from "react";
// import axios from "axios";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for the eye button
// import "./AuthCss.css";

// const AuthComponent = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState(""); // Success message state
//   const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
//   const apiKey = "AIzaSyBIT571gtFr2csDs_pIxbW4ayTcLcpffmg"; // Your Firebase API key

//   // Toggle form (Sign-up/Login)
//   const toggleForm = useCallback(() => {
//     setIsLogin((prevIsLogin) => !prevIsLogin); // Toggle login/signup
//     setError("");
//     setSuccessMessage("");
//     setEmail("");
//     setPassword("");
//   }, []);

//   // Memoized input fields to avoid re-renders
//   const emailInput = useMemo(
//     () => (
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         required
//       />
//     ),
//     [email]
//   );

//   const passwordInput = useMemo(
//     () => (
//       <div className="password-container">
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//           required
//         />
//         <span
//           className="password-toggle-icon"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </span>
//       </div>
//     ),
//     [password, showPassword]
//   );

//   // Form submission logic
//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
    
//     try {
//       let url = isLogin
//         ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
//         : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    
//       await axios.post(url, {
//         email,
//         password,
//         returnSecureToken: true,
//       });

//       if (!isLogin) {
//         // Sign-up successful, switch to login mode
//         setSuccessMessage("Sign-up successful! Please log in.");
//         toggleForm(); // Redirect to login form
//       } else {
//         // Login successful
//         setSuccessMessage("Login successful!");
//       }
//     } catch (err) {
//       setError(
//         err.response ? err.response.data.error.message : "Network error. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, [email, password, isLogin, toggleForm]); // Only rerun if these dependencies change

//   // Trigger alert on successful login
//   useEffect(() => {
//     if (successMessage === "Login successful!") {
//       alert("Logged in successfully");
//     }
//   }, [successMessage]);

//   return (
//     <div className="auth-container">
//       <div className="form-container">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             {emailInput}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             {passwordInput}
//           </div>
//           {error && <p className="error-text">{error}</p>}
//           <button type="submit" className="btn" disabled={loading}>
//             {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p className="toggle-text">
//           {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
//           <span onClick={toggleForm} className="toggle-link">
//             {isLogin ? "Sign up" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;

// src/Components/AuthComponent.jsx


// 2nd file 
// import { useState, useMemo, useCallback, useEffect } from "react";
// import axios from "axios";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for the eye button
// import { useNavigate } from "react-router-dom";
// import "./AuthCss.css";

// const AuthComponent = ({ setIsAuthenticated }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState(""); // Success message state
//   const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
//   const navigate = useNavigate();
//   const apiKey = "AIzaSyBIT571gtFr2csDs_pIxbW4ayTcLcpffmg"; 

//   // Toggle form (Sign-up/Login)
//   const toggleForm = useCallback(() => {
//     setIsLogin((prevIsLogin) => !prevIsLogin); // Toggle login/signup
//     setError("");
//     setSuccessMessage("");
//     setEmail("");
//     setPassword("");
//   }, []);

//   // Memoized input fields
//   const emailInput = useMemo(
//     () => (
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         required
//       />
//     ),
//     [email]
//   );

//   const passwordInput = useMemo(
//     () => (
//       <div className="password-container">
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//           required
//         />
//         <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </span>
//       </div>
//     ),
//     [password, showPassword]
//   );

//   // Form submission logic
//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       setError("");

//       try {
//         let url = isLogin
//           ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
//           : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

//         await axios.post(url, {
//           email,
//           password,
//           returnSecureToken: true,
//         });

//         if (!isLogin) {
//           // Sign-up successful, switch to login mode
//           setSuccessMessage("Sign-up successful! Please log in.");
//           toggleForm(); // Redirect to login form
//         } else {
//           // Login successful
//           setSuccessMessage("Login successful!");
//           setIsAuthenticated(true); // Set authentication state
//           navigate("/Main");
//         }
//       } catch (err) {
//         setError(
//           err.response ? err.response.data.error.message : "Network error. Please try again."
//         );
//       } finally {
//         setLoading(false);
//       }
//     },
//     [email, password, isLogin, apiKey, setIsAuthenticated, navigate, toggleForm]
//   );

//   return (
//     <div className="auth-container">
//       <div className="form-container">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             {emailInput}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             {passwordInput}
//           </div>
//           {error && <p className="error-text">{error}</p>}
//           <button type="submit" className="btn" disabled={loading}>
//             {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p className="toggle-text">
//           {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
//           <span onClick={toggleForm} className="toggle-link">
//             {isLogin ? "Sign up" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;


// 3rd 
// import { useState, useMemo, useCallback } from "react";
// import axios from "axios";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for the eye button
// import { useNavigate } from "react-router-dom";
// import "./AuthCss.css";

// const AuthComponent = ({ setIsAuthenticated }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState(""); // Success message state
//   const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
//   const navigate = useNavigate();
//   const apiKey = "AIzaSyBIT571gtFr2csDs_pIxbW4ayTcLcpffmg"; 

//   // Toggle form (Sign-up/Login)
//   const toggleForm = useCallback(() => {
//     setIsLogin((prevIsLogin) => !prevIsLogin); // Toggle login/signup
//     setError("");
//     setSuccessMessage("");
//     setEmail("");
//     setPassword("");
//   }, []);

//   // Memoized input fields
//   const emailInput = useMemo(
//     () => (
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         required
//       />
//     ),
//     [email]
//   );

//   const passwordInput = useMemo(
//     () => (
//       <div className="password-container">
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//           required
//         />
//         <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </span>
//       </div>
//     ),
//     [password, showPassword]
//   );

//   // Form submission logic
//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       setError("");

//       try {
//         let url = isLogin
//           ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
//           : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

//         const response = await axios.post(
//           url,
//           {
//             email,
//             password,
//             returnSecureToken: true,
//           },
//           {
//             headers: {
//               'Access-Control-Allow-Origin': '*',
//               'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
//               'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//             },
//           }
//         );

//         console.log("Response from Firebase:", response.data); // Log the full response

//         if (!isLogin) {
//           // Sign-up successful, switch to login mode
//           setSuccessMessage("Sign-up successful! Please log in.");
//           toggleForm(); // Redirect to login form
//         } else {
//           // Login successful
//           setSuccessMessage("Login successful!");
//           setIsAuthenticated(true); // Set authentication state
//           navigate("/Main");
//         }
//       } catch (err) {
//         console.log("Error:", err.response); // Log the error response from Firebase
//         setError(
//           err.response ? err.response.data.error.message : "Network error. Please try again."
//         );
//       } finally {
//         setLoading(false);
//       }
//     },
//     [email, password, isLogin, apiKey, setIsAuthenticated, navigate, toggleForm]
//   );

//   return (
//     <div className="auth-container">
//       <div className="form-container">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             {emailInput}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             {passwordInput}
//           </div>
//           {error && <p className="error-text">{error}</p>}
//           <button type="submit" className="btn" disabled={loading}>
//             {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p className="toggle-text">
//           {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
//           <span onClick={toggleForm} className="toggle-link">
//             {isLogin ? "Sign up" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;

// 4th 


// AuthComponent.jsx
// AuthComponent.jsx
import { useState, useMemo, useCallback } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import Firebase config
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for the eye button
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import "./AuthCss.css";

const AuthComponent = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const navigate = useNavigate();

  // Toggle form (Sign-up/Login)
  const toggleForm = useCallback(() => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setError("");
    setSuccessMessage("");
    setEmail("");
    setPassword("");
  }, []);

  // Memoized input fields
  const emailInput = useMemo(
    () => (
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
    ),
    [email]
  );

  const passwordInput = useMemo(
    () => (
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    ),
    [password, showPassword]
  );

  // Form submission logic
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
        if (isLogin) {
          // Login with Firebase
          await signInWithEmailAndPassword(auth, email, password);
          setSuccessMessage("Login successful!");
          setIsAuthenticated(true); // Set authentication state
          localStorage.setItem("isAuthenticated", "true"); // Store in local storage
          navigate("/Main/Wellness");
        } else {
          // Sign up with Firebase
          await createUserWithEmailAndPassword(auth, email, password);
          setSuccessMessage("Sign-up successful! Please log in.");
          toggleForm(); // Switch to login after signup
        }
      } catch (err) {
        setError(err.message || "Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [email, password, isLogin, setIsAuthenticated, navigate, toggleForm]
  );

  // Prop types validation
  AuthComponent.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {emailInput}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            {passwordInput}
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthComponent;
