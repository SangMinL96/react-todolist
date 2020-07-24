import React, { useReducer, createContext, useContext, useRef } from "react";

const craeteTodos = [
  {
    id: 1,
    text: "투두리스트",
    done: true,
  },
  {
    id: 2,
    text: "투두리스트",
    done: false,
  },
  {
    id: 3,
    text: "투두리스트",
    done: false,
  },
];
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((user) =>
        user.id === action.id ? { ...user, done: !user.done } : user
      );
    case "REMOVE":
      return state.filter((user) => user.id !== action.id);
    default:
      throw new Error("Error");
  }
}

const DispatchContext = createContext();
const StateContext = createContext();
const nextIdContext = createContext();

export function TodoProvider({ children }) {
  const nextId = useRef(4);
  const [state, dispatch] = useReducer(todoReducer, craeteTodos);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <nextIdContext.Provider value={nextId}>
          {children}
        </nextIdContext.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(StateContext);
}
export function useTodoDispatch() {
  return useContext(DispatchContext);
}
export function useNextId() {
  return useContext(nextIdContext);
}
