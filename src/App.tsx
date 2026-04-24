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

    "I'm really, really sorry po :<"
  ];

  // Different GIFs per page (pair them per 2 lines)
  const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJseWhmaHkxbzZmaG1hc2w5YmFjcmwxN3g5bzRqeTNuY2p0MXptdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aw9gwZlltbdX92b4w/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMndpZWd3cWc0cTl0dnhtOWFqcHZxazU3aDRpM29wdGk2NGFpcm9yNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/puUeBoInZy16GV2VkN/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGFxYmY2NjhyMzRwb28yMnh3cDB2ZHVnMTA3OWpvcWx4NDRtYnQ3MSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/K6WIhJ07gwGkIAQfwN/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGFxYmY2NjhyMzRwb28yMnh3cDB2ZHVnMTA3OWpvcWx4NDRtYnQ3MSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/qUIm5wu6LAAog/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBkcnY5OGdlMnIwdWg5NmNvN2lhdTlibjhzb3NraGlxNWVkdTFnMSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/dTNGL5UGTyE9Y033WK/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXowN2JteXFqam82N3gyMWl2NHducmxrd2s0bWF5aHlsNDYxeWw1cSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/CMIDKjddFg5YQ/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGFxYmY2NjhyMzRwb28yMnh3cDB2ZHVnMTA3OWpvcWx4NDRtYnQ3MSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/xUOwFZmWUC2QDHKu4M/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGFxYmY2NjhyMzRwb28yMnh3cDB2ZHVnMTA3OWpvcWx4NDRtYnQ3MSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/xT5LMC5KC4whB6qyyc/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczhuNHBydjA4MXgxZ3pvOWFpNGRxYzJhMmM1ZTVtOGwwdXhjYjVwdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OUVPn4HIHN59nUW8eM/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTJ0dzNya3h0OGV2bzcycWR3cDRqODNpeWlnZWx0djVpNm9mcXg1OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Gf54zTxt2QKru/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmppOHA2ZDRmaXp3MWhiMTB2eXRsemhzdDNvcDk3a2M0Nms3OHZiOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wvYNSqBAMDVx8CEYkt/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzd1ZHNlb28xZXF2ODM0cXhnc2FyYTN0YWdtc3A0OGg2dmhma3VmZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7zzjU4ToWpasY36ab4/giphy.gif"
  ];

  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const page = Math.floor(index / 2);

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
        {/* Hearts inside */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [-20, -120] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
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
              <button onClick={nextPage} className="btn btn-light mt-3">
                Continue 💜
              </button>
            )}
          </>
        )}

        {/* Dynamic GIF */}
        <motion.div
          className="mt-4"
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={gifs[page] || gifs[gifs.length - 1]}
            alt="emotional reaction"
            className="img-fluid rounded"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
