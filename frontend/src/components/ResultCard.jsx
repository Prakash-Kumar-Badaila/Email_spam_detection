import { motion } from "framer-motion";
function ResultCard({ result }) {
  if (!result) return null;

  const isSpam = result.label === "Spam";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl">
        <h2
          className={`text-3xl font-bold ${
            isSpam ? "text-red-600" : "text-green-600"
          }`}
        >
          {isSpam ? (
            <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
              <h2 className="text-xl font-bold">🚨 Spam Detected</h2>
              <p>This email contains suspicious content.</p>
              <p>Avoid clicking any links.</p>
            </div>
          ) : (
            <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg">
              <h2 className="text-xl font-bold">✅ Safe Email</h2>
              <p>This email appears to be safe.</p>
            </div>
          )}
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Confidence:
          <span className="font-bold ml-2">
            {result.confidence.toFixed(2)}%
          </span>
        </p>

        <div className="mt-5 h-4 w-full rounded-full bg-gray-300 overflow-hidden">
          <div
            style={{ width: `${result.confidence}%` }}
            className={`h-full ${isSpam ? "bg-red-500" : "bg-green-500"}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ResultCard;
