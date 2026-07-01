import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import RepoList from "../components/RepoList";
import Footer from "../components/Footer";

function Home() {
  const [input, setInput] = useState("react");
  const [search, setSearch] = useState("react");
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState("stars");

  const handleSearch = () => {
    setSearch(input);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <SearchBar
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
        />

        <FilterBar
          language={language}
          setLanguage={setLanguage}
          sort={sort}
          setSort={setSort}
        />

        <RepoList
          search={search}
          language={language}
          sort={sort}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;