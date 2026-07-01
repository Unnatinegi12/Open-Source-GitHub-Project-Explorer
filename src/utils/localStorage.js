export const getBookmarks = () => {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
};

export const saveBookmarks = (bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || {};
};

export const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};