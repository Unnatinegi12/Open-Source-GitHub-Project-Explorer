import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import Stats from "./Stats";
import Loader from "./Loader";
import { fetchRepositories } from "../services/githubApi";

function RepoList({ search, language, sort }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRepos() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchRepositories(
          search,
          language,
          sort
        );

        setRepos(data);
      } catch (err) {
        setError("Unable to fetch repositories. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, [search, language, sort]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-xl">
        {error}
      </div>
    );
  }

  return (
    <>
      <Stats repos={repos} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
}

export default RepoList;
