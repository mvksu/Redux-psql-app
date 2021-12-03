export default function Panel() {
  return (
    <div className="bg-gray-700 w-full h-16 col-span-3 rounded flex items-center px-4 justify-between">
      <h1>Items</h1>
      <button className="text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-400">
        + Add New
      </button>
    </div>
  );
}
