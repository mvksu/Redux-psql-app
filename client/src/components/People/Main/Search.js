import { FaSearch } from "react-icons/fa";
export default function Search({ setSearchValue}) {
  return (
    <div className="flex items-center">
      <FaSearch className="text-gray-400 text-sm mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-700 px-4 py-2 border-0 rounded-md sm:w-40 w-24 text-white"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
