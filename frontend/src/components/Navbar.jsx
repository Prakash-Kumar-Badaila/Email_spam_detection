function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-2xl font-bold text-white">
          SpamShield AI
        </h1>

        <p className="text-gray-300 text-sm">
          Intelligent Email Protection
        </p>
      </div>

      <div className="bg-cyan-500 px-4 py-2 rounded-full text-white font-semibold">
        Logistic Regression
      </div>

    </nav>
  );
}

export default Navbar;