import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ApologyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-400 to-purple-700 text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center mb-4"
        >
          <Heart size={50} />
        </motion.div>

        <h1 className="text-3xl font-bold mb-4">I'm Sorry 💜</h1>

        <p className="text-lg mb-6">
          I know I made a mistake, and I hurt you. That was never my intention.
          You mean so much to me, and I truly regret what I did.
        </p>

        <p className="text-md mb-6">
          I hope you can find it in your heart to forgive me. I promise to do
          better and make things right because you are important to me.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold"
        >
          Please Forgive Me 💜
        </motion.button>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <img
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
            alt="cute apology gif"
            className="rounded-xl mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
