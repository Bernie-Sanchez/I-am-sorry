import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function ApologyPage() {
  const fullText = `I know I made a mistake po, and I hurt you po or I made you annoyed on me po. That was never my intention po.
  You mean so much to me po, and I truly regret what I did po.\n\nI hope you can find it po in your heart to forgive me po.
  I promise to do better po and make things right po because you are important to me po :<.\n\n
  I know I don't deserve your time po right now but I hope you can spare me some of your time po. I am so sorry po.\n\n
  To be honest po, I am disappointed already in myself po because I still made you mad at me po, I still made you annoyed at me po, and sometimes I still hurt you po\n\n
  So now I am here po to apologize for all the things that I've done to you po. I don't know either po if you can still forgive me po. But atleast po, I'll try and I give my apology po to you.\n\n
  I am still shy po for what I've done po, but nothing happened po if I stay shy for what I've done po, I am so sorry po for making mistakes po, for making you mad at me po\n\n
  I don't want to go along po with your problems and struggles but I still do that without knowing it, and because of that I made it big more and I am so sorry for that po :<\n\n
  I hope I can hug you right now and say sorry po in personal :< I am so so so sorry po, I hope you still can forgive me po :<\n\n
  I love you so much and I miss you so much :< I am very sorry po :<\n\n\n\n
  Sorryyyy :<\n\n
  I love you so much po 💜\n
  I miss you so much po :<`;

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
      className="d-flex justify-content-center align-items-start min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg, #d8b4fe, #a855f7, #6b21a8)",
        overflowY: "auto"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="card text-center p-4 shadow-lg overflow-visible"
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
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mb-3"
        >
          <Heart size={50} />
        </motion.div>

        <h1 className="fw-bold mb-3">I'm so Sorry po 💜</h1>

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
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJseWhmaHkxbzZmaG1hc2w5YmFjcmwxN3g5bzRqeTNuY2p0MXptdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aw9gwZlltbdX92b4w/giphy.gif"
            alt="emotional penguin apology"
            className="img-fluid rounded"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
