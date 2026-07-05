import { useState } from "react";
import api from "./services/api";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

function App() {

  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {

    if (!email.trim()) return;

    try {

      setLoading(true);

      const response = await api.post("predict/", {
        email,
      });

      setResult(response.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  const clearAll = () => {
    setEmail("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex justify-center items-center p-6">

      <div className="w-full max-w-4xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
        <Navbar />
        <Header />

        <EmailForm
          email={email}
          setEmail={setEmail}
          handlePredict={handlePredict}
          loading={loading}
          clearAll={clearAll}
        />

        <ResultCard result={result} />

        <Footer />

      </div>

    </div>
  );
}

export default App;