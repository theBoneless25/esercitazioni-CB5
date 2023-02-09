import { actions } from "./action";

const mainReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NEW_NOTES:
      localStorage.setItem(
        "note-list",
        JSON.stringify([...state.noteList, action.payload])
      );
      localStorage.setItem(
        "initial-note-list",
        JSON.stringify([...state.initialNoteList, action.payload])
      );

      return {
        ...state,
        noteList: [...state.noteList, action.payload],
        initialNoteList: [...state.noteList, action.payload],
      };
    case actions.SELECT_USER:
      localStorage.setItem("Note-app-username", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    case actions.REMOVE_USER:
      localStorage.removeItem("Note-app-username");
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
        },
      };
    case actions.SEARCH_NOTE:
      return {
        ...state,
        noteList: state.initialNoteList.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case actions.DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { mainReducer };
