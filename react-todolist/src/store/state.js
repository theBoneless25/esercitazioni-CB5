import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: "1",
      content: "Andare al Supermercato",
      status: false,
    },
    {
      id: "2",
      content: "Fare una passeggiata in bici",
      status: true,
    },
    {
      id: "3",
      content: "Andare a mare ",
      status: false,
    },
  ],
};

const ApplicationCtx = createContext(initialState);

export { ApplicationCtx, initialState };
