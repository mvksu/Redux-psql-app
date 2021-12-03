export default function FilterMenu() {
  return (
    <div className="bg-white rounded-md">
      <ul className="mx-2 my-4 flex flex-wrap">
        <li className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm">
          All
        </li>
        <li className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm">
          People
        </li>
        <li className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm">
          Directors
        </li>
        <li className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm">
          Actors
        </li>
      </ul>
    </div>
  );
}
