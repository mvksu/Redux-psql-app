

export default function Sort({ setSortValue }) {

  return (
    <div>
      <label htmlFor="" className="text-gray-400 mr-2 text-sm hidden lg:inline">
        Sort by:
      </label>
      <select
        className="bg-gray-700 text-white cursor-pointer outline-none"
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="id">Sort By Id</option>
        <option value="title">Sort By Title</option>
        <option value="release_date">Sort By Date</option>
      </select>
    </div>
  );
}
