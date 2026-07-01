function FilterBar({
  language,
  setLanguage,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="">All Languages</option>
        <option>JavaScript</option>
        <option>Python</option>
        <option>Java</option>
        <option>TypeScript</option>
        <option>C++</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="stars">Stars</option>
        <option value="updated">Updated</option>
      </select>

    </div>
  );
}

export default FilterBar;