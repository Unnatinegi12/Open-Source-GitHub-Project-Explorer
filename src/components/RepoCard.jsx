import { useState, useEffect } from "react";
import {
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaBookmark,
} from "react-icons/fa";

import {
  getBookmarks,
  saveBookmarks,
  getNotes,
  saveNotes,
} from "../utils/localStorage";

function RepoCard({ repo }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    const bookmarks = getBookmarks();
    setBookmarked(bookmarks.includes(repo.id));

    const notes = getNotes();
    setNote(notes[repo.id] || "");
  }, [repo.id]);

  const toggleBookmark = () => {
    let bookmarks = getBookmarks();

    if (bookmarks.includes(repo.id)) {
      bookmarks = bookmarks.filter((id) => id !== repo.id);
      setBookmarked(false);
    } else {
      bookmarks.push(repo.id);
      setBookmarked(true);
    }

    saveBookmarks(bookmarks);
  };

  const handleNote = (value) => {
    setNote(value);

    const notes = getNotes();
    notes[repo.id] = value;

    saveNotes(notes);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold text-blue-600">
          {repo.name}
        </h2>

        <button onClick={toggleBookmark}>
          <FaBookmark
            color={bookmarked ? "gold" : "gray"}
            size={22}
          />
        </button>

      </div>

      <p className="text-gray-600 mt-3">
        {repo.description}
      </p>

      <div className="flex justify-between mt-4">

        <span>
          ⭐ {repo.stargazers_count}
        </span>

        <span>
          🍴 {repo.forks_count}
        </span>

        <span>
          {repo.language}
        </span>

      </div>

      <textarea
        placeholder="Write notes..."
        className="w-full mt-4 border rounded-lg p-2"
        value={note}
        onChange={(e) => handleNote(e.target.value)}
      />

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold"
      >
        View Repository
        <FaExternalLinkAlt />
      </a>

    </div>
  );
}

export default RepoCard;