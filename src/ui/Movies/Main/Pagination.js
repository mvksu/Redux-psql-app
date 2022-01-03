import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination({ items, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(items.length / 4); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="flex items-center justify-center py-8">
      {currentPage > 1 && <FaAngleLeft className="text-blue-400 text-2xl"/>}
      <ul className="flex my-5 justify-center">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button className={`bg-white border-2 border-blue-200 w-10 h-10 text-gray-400 mx-1 ${currentPage === number && "border-4"}`} onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
      {currentPage < pageNumbers.length && <FaAngleRight className="text-blue-400 text-2xl"/>}
    </nav>
  );
}
