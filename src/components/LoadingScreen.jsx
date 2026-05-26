import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "2px",
            height: "2px",
            background: "white",
            borderRadius: "50%",
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3rem",
          fontFamily: "cursive",
          zIndex: 1,
        }}
      >
        Entering Our Universe ✨
      </motion.h1>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        style={{
          marginTop: "20px",
          fontSize: "2rem",
          zIndex: 1,
        }}
      >
        💖
      </motion.div>
    </div>
  );
}

export default LoadingScreen;