import { motion } from "framer-motion";
import { useState } from "react";
import Confetti from "react-confetti";

import baby from "../assets/baby.png";
import love1 from "../assets/love1.png";
import love2 from "../assets/love2.png";
import love3 from "../assets/love3.png";

function UniversePage() {
  const [showLetter, setShowLetter] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);

  const quotes = [
    "You are my favorite universe 💖",
    "Every moment with you is magic ✨",
    "My safe place is you 🌙",
    "You make my world beautiful 💫",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #090016, #1f1147, #120524)",
        overflow: "hidden",
        position: "relative",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* STARS */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
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
            borderRadius: "50%",
            background: "white",
          }}
        />
      ))}

      {/* SHOOTING STARS */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shoot-${i}`}
          animate={{
            x: [-200, 1200],
            y: [0, 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            position: "absolute",
            top: `${i * 18}%`,
            left: "-20%",
            width: "150px",
            height: "2px",
            background:
              "linear-gradient(to right, white, transparent)",
            transform: "rotate(-25deg)",
          }}
        />
      ))}

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          paddingTop: "40px",
          fontSize: "4rem",
          fontFamily: "cursive",
          textShadow: "0 0 20px rgba(255,255,255,0.5)",
        }}
      >
        Our Love Universe 🌌
      </motion.h1>

      {/* QUOTES */}
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: `${20 + index * 12}%`,
            right: `${5 + index * 2}%`,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {quote}
        </motion.div>
      ))}

      {/* LOVE LETTER PLANET */}
      <Planet
        emoji="💌"
        color="#ff4d88"
        top="35%"
        left="15%"
        onClick={() => setShowLetter(true)}
      />

      {/* MEMORY PLANET */}
      <Planet
        emoji="📸"
        color="#6c63ff"
        top="50%"
        left="75%"
        onClick={() => setShowGallery(true)}
      />

      {/* BIRTHDAY PLANET */}
      <Planet
        emoji="🎂"
        color="#ffd166"
        top="75%"
        left="45%"
        onClick={() => setShowBirthday(true)}
      />

      {/* MUSIC BUTTON.................. */}
      <a
        href="https://open.spotify.com/track/2obACfnYSnLmSP2jjh77Xz?si=QCDInynRSxakQJeZT574ZQ"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: "#1DB954",
          color: "white",
          padding: "12px 20px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 0 20px rgba(29,185,84,0.6)",
        }}
      >
        🎵 Our Song
      </a>

      {/* LOVE LETTER POPUP */}
      {showLetter && (
        <Modal onClose={() => setShowLetter(false)}>
          <h2 style={{ color: "#ff4d88" }}>
            To My Favorite Person 💖
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              marginTop: "20px",
              color: "#444",
            }}
          >
            Happy Birthday EN THANGAMEY 🌙✨
            <br />
            <br />
            Thank you for being my peace,
            happiness, comfort, and biggest support.
            <br />
            <br />
            Every moment with you feels magical.
            I’m so lucky to have you in my universe 💌
            You Deserve everything and I will make it happen at any cast.
          </p>
        </Modal>
      )}

      {/* GALLERY POPUP */}
      {showGallery && (
        <Modal onClose={() => setShowGallery(false)} width="900px">
          <h2 style={{ color: "#6c63ff" }}>
            Our Beautiful Memories 📸
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            {[love1, love2, love3].map((pic, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.05 }}
                src={pic}
                alt=""
                style={{
                  width: "220px",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        </Modal>
      )}

      {/* BIRTHDAY POPUP */}
      {showBirthday && (
        <div>
          <Confetti />

          <Modal onClose={() => setShowBirthday(false)}>
            <img
              src={baby}
              alt=""
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                border: "6px solid #ff4d88",
                boxShadow: "0 0 30px rgba(255,77,136,0.6)",
              }}
            />

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              style={{
                fontSize: "5rem",
                marginTop: "20px",
              }}
            >
              🎂
            </motion.div>

            <h1
              style={{
                color: "#ff4d88",
                marginTop: "10px",
                fontSize: "2.5rem",
              }}
            >
              Happy Birthday My Love 💖
            </h1>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              I hope your life becomes as beautiful
              as the happiness you give me every day 🌙✨
              <br />
              <br />
              Thank you for existing 💖
            </p>
          </Modal>
        </div>
      )}
    </div>
  );
}

/* PLANET COMPONENT */
function Planet({ emoji, color, top, left, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 4 }}
      style={{
        width: "130px",
        height: "130px",
        borderRadius: "50%",
        background: color,
        position: "absolute",
        top,
        left,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: `0 0 40px ${color}`,
        fontSize: "2.5rem",
      }}
    >
      {emoji}
    </motion.div>
  );
}

/* MODAL COMPONENT */
function Modal({ children, onClose, width = "450px" }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          width,
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            border: "none",
            background: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        {children}
      </motion.div>
    </div>
  );
}

export default UniversePage;