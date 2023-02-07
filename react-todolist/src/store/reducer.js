import { initialState } from "./state";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_TO_LIST":
      //console.log(state);
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "TRUE_OR_FALSE":
      //console.log(state);
      return {
        ...state,
        todoList: [
          ...state.todoList.map((item) => {
            return {
              ...item,
              status: item.id === action.payload && !item.status,
            };
          }),
        ],
      };
      //case "REMOVE_TODO_FROM_LIST":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
