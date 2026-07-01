function SearchBar({
  input,
  setInput,
  handleSearch,
}) {
  return (
    <div className="flex gap-3 my-8">

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search repositories..."
        className="flex-1 p-4 rounded-xl shadow border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-8 rounded-xl hover:bg-blue-700"
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;