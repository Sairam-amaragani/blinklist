import { ADD_BOOK, READ_BOOK } from "./types";

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book: book,
  };
};

export const readBook = (book) => {
  return {
    type: READ_BOOK,
    book: book,
  };
};
