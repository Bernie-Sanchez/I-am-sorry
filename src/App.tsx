import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ApologyPage() {
  const messages = [
    "I know I made a mistake po, and I hurt you po.",
    "That was never my intention po.",

    "You mean so much to me po, and I truly regret what I did po.",
    "I hope you can find it po in your heart to forgive me po.",

    "I promise to do better po and make things right po.",
    "Because you are important to me po :<",

    "I know I don't deserve your time po right now.",
    "But I hope you can spare me some of your time po.",

    "I am disappointed in myself po.",
    "Because I still made you mad and hurt you po.",

    "I am here to apologize for everything po.",
    "I don’t know if you can forgive me po.",

    "But I will still try po.",
    "I want to give my sincere apology po.",

    "I am shy po for what I’ve done.",
    "But staying silent won’t fix anything po.",

    "I’m sorry for making your problems heavier po.",
    "I didn’t mean to make things worse po :<",

    "I wish I could hug you right now po.",
    "And say sorry in person po :<",

    "I love you so much po 💜",
    "I miss you so much po :<",

    "Sorry :<"
  ];

  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const nextPage = () => {
    if (index + 2 < messages.length) {
      setIndex(index + 2);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg, #d8b4fe, #a855f7, #6b21a8)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="card text-center p-4 shadow-lg position-relative overflow-hidden"
        style={{
          maxWidth: "500px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          color: "white",
          marginTop: "20px",
          marginBottom: "40px"
        }}
      >
        {/* Floating hearts INSIDE card */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [-20, -120] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6
            }}
            style={{
              position: "absolute",
              bottom: "10px",
              left: `${10 + i * 12}%`,
              fontSize: "18px",
              pointerEvents: "none"
            }}
          >
            💜
          </motion.div>
        ))}

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mb-3"
        >
          <Heart size={50} />
        </motion.div>

        <h1 className="fw-bold mb-3">I'm so Sorry po 💜</h1>

        {!started && (
          <button
            onClick={() => setStarted(true)}
            className="btn btn-primary"
            style={{ backgroundColor: "#7c3aed", border: "none" }}
          >
            Open My Message 💜
          </button>
        )}

        {started && (
          <>
            <p style={{ fontSize: "18px", minHeight: "80px" }}>
              {messages[index]}<br />
              {messages[index + 1]}
            </p>

            {index + 2 < messages.length && (
              <button
                onClick={nextPage}
                className="btn btn-light mt-3"
              >
                Continue 💜
              </button>
            )}
          </>
        )}

        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJseWhmaHkxbzZmaG1hc2w5YmFjcmwxN3g5bzRqeTNuY2p0MXptdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aw9gwZlltbdX92b4w/giphy.gif"
            alt="emotional penguin apology"
            className="img-fluid rounded"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
