import { FaRobot } from "react-icons/fa";
function Header() {
  return (
    <>
      <h1 className="text-5xl text-white flex justify-center gap-3">
        <FaRobot />
        Email Spam Detector
      </h1>

      <p className="text-center text-gray-300 mt-3">
        Analyze emails instantly using Machine Learning.
      </p>
    </>
  );
}

export default Header;
