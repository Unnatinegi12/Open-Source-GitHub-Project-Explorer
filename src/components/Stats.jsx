function Stats({ repos }) {
  if (!repos.length) return null;

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const languages = [
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          {repos.length}
        </h2>

        <p className="mt-2 text-gray-500">
          Repositories
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-4xl font-bold text-green-600">
          {languages.length}
        </h2>

        <p className="mt-2 text-gray-500">
          Languages
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-4xl font-bold text-orange-500">
          {totalStars.toLocaleString()}
        </h2>

        <p className="mt-2 text-gray-500">
          Total Stars
        </p>
      </div>

    </div>
  );
}

export default Stats;