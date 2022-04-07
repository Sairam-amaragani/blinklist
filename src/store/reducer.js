import { ADD_BOOK, READ_BOOK } from "./types";

const initialState = {
  reading: [
    {
      id: 0,
      image: "book1.png",
      title: "Testing Business Ideas",
      author: "Sai Ram",
      timeToRead: "15 min",
    },
    {
      id: 1,
      image: "book2.png",
      title: "Social Networking",
      author: "Vivek",
      timeToRead: "20 min",
    },
    {
      id: 2,
      image: "book3.png",
      title: "The Art Of Rest",
      author: "Srivathsa",
      timeToRead: "30 min",
    },
  ],
  finished: [],
  lastId: 2,
};
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.lastId++;
      return {
        ...state,
        reading: [
          ...state.reading,
          {
            ...action.book,
            id: state.lastId,
            timeToRead: action.book.timeToRead + " min",
          },
        ],
      };
    case READ_BOOK:
      const temp = state.reading.filter((book) => book.id !== action.book.id);
      return {
        ...state,
        finished: [...state.finished, action.book],
        reading: [...temp],
      };
    default:
      return state;
  }
};

export default bookReducer;
