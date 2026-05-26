import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
const navigate = useNavigate();
 const checkPassword = () => {
  if (password.toLowerCase() === "bubududu") {
    setMessage("Access Granted 💖");

    setTimeout(() => {
      navigate("/universe");
    }, 1500);

  } else {
    setMessage("Wrong password 😭");
  }
};

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #141e30, #243b55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          marginBottom: "20px",
          fontSize: "2.5rem",
          fontFamily: "cursive",
        }}
      >
        Our pet name 🔐
      </motion.h1>

      <input
        type="password"
        placeholder="Enter our nickname..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          width: "250px",
          outline: "none",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={checkPassword}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          background: "#ff4d88",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Enter 💖
      </button>

      <p style={{ marginTop: "20px" }}>{message}</p>
    </div>
  );
}

export default PasswordPage;