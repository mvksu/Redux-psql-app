import { Link } from "react-router-dom";
export default function Loading() {
  return (
    <div className="text-black mt-48 flex flex-col items-center">
      <h2 className="text-blue-400">Loading...</h2>
      <div className=" flex justify-center items-center mt-5">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
      </div>
        <Link
          to="/"
          className="bg-blue-400 px-6 py-3 rounded text-white my-6 mb-44 hover:bg-blue-300 mt-10"
        >Home
        </Link>
    </div>
  );
}
