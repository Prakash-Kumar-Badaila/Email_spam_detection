function EmailForm({
  email,
  setEmail,
  handlePredict,
  loading,
  clearAll,
}) {
  return (
    <>
      <textarea
        rows={10}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Paste your email here..."
        className="mt-8 w-full rounded-2xl bg-white p-5 text-gray-700 shadow-lg outline-none focus:ring-4 focus:ring-cyan-400 resize-none"
      />

      <div className="flex gap-4 mt-6">

        <button
          onClick={handlePredict}
          disabled={loading}
          className="flex-1 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 transition"
        >
         {loading ? (

<div className="flex justify-center">

<div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

</div>

):(

"🔍 Analyze"

)}
        </button>

        <button
          onClick={clearAll}
          className="px-8 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition"
        >
          Clear
        </button>

      </div>
    </>
  );
}

export default EmailForm;