import axios from "axios";

const API = "https://api.github.com/search/repositories";

export const fetchRepositories = async (
  query = "react",
  language = "",
  sort = "stars"
) => {
  try {
    let searchQuery = query;

    if (language) {
      searchQuery += ` language:${language}`;
    }

    const response = await axios.get(API, {
      params: {
        q: searchQuery,
        sort,
        order: "desc",
        per_page: 12,
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("GitHub API Error:", error.response?.status);
    return [];
  }
};