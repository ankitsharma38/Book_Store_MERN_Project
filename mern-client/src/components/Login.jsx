import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        alert("Login Successfully!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Invalid Email or Password!");
      });
  };

  const handleRegister = () => {
    loginWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Google Sign-In failed!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image with Blur & Transparency */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 "
        style={{
          backgroundImage: `url('https://ik.imagekit.io/julyhwpbw/DALL_E%202025-03-14%2002.28.49%20-%20A%20seamless%20black%20and%20white%20pattern%20background%20in%20landscape%20orientation%20featuring%20various%20book-related%20symbols%20such%20as%20open%20books,%20closed%20books,%20stacks.webp?updatedAt=1741899584571')`,
        }}
      ></div>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold text-center  ">
          Welcome to Book Heaven 
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Email address"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="Password"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300">
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleRegister}
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 transition duration-300 hover:bg-gray-200"
        >
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
