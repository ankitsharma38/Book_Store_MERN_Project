import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-Out Successful!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
      });
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/julyhwpbw/DALL_E%202025-03-14%2002.28.49%20-%20A%20seamless%20black%20and%20white%20pattern%20background%20in%20landscape%20orientation%20featuring%20various%20book-related%20symbols%20such%20as%20open%20books,%20closed%20books,%20stacks.webp?updatedAt=1741899584571')`,
          opacity: "0.3",
        }}
      ></div>

      {/* Logout Card with Framer Motion Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200 text-center max-w-sm z-10"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Are you sure?</h2>
        <p className="text-gray-600 mb-6">You will be logged out of your account.</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LogOut;
