import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function ApologyPage() {
  const fullText = `I know I made a mistake, and I hurt you. That was never my intention. You mean so much to me, and I truly regret what I did.\n\nI hope you can find it in your heart to forgive me. I promise to do better and make things right because you are important to me.`;

  const [displayedText, setDisplayedText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!showMessage) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [showMessage]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #d8b4fe, #a855f7, #6b21a8)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="card text-center p-4 shadow-lg"
        style={{
          maxWidth: "500px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mb-3"
        >
          <Heart size={50} />
        </motion.div>

        <h1 className="fw-bold mb-3">I'm Sorry 💜</h1>

        {!showMessage && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessage(true)}
            className="btn btn-primary"
            style={{ backgroundColor: "#7c3aed", border: "none" }}
          >
            Open My Message 💜
          </motion.button>
        )}

        {showMessage && (
          <motion.p
            className="mt-3"
            style={{ whiteSpace: "pre-line", fontSize: "18px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {displayedText}
          </motion.p>
        )}

        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <img
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
            alt="cute apology gif"
            className="img-fluid rounded"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
