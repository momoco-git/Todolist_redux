// Actions

const CREATE = "todo/CREATE";
const UPDATE = "todo/UPDATE";
const DELETE = "todo/DELETE";

const initinalState = [
  {
    id: 1,
    Done: true,
    title: "리액트하기",
    todoDesc: "리액트 기초를 익혀봅시다",
  },
  {
    id: 2,
    Done: false,
    title: "라우터",
    todoDesc: "라우터 기초를 익혀봅시다",
  },
  {
    id: 3,
    Done: false,
    title: "리덕스",
    todoDesc: "리덕스 기초를 익혀봅시다",
  },
];

// Action Creators
export function createTodo(todolist) {
  return { type: CREATE, todolist };
}
export function updateTodo(todo_id) {
  return { type: UPDATE, todo_id };
}

export function deleteTodo(todo_id) {
  return { type: DELETE, todo_id };
}

// Reducer
export default function reducer(state = initinalState, action = {}) {
  switch (action.type) {
    case "todo/CREATE": {
      const new_todolist = [...state, action.todolist];

      return new_todolist;
    }
    case "todo/UPDATE": {
      const new_todolist = state.map((x) => {
        if (x.id === parseInt(action.todo_id)) {
          return { ...x, Done: !x.Done };
        } else {
          return x;
        }
      });
      return new_todolist;
    }

    case "todo/DELETE": {
      const new_todolist = state.filter((x) => {
        return x.id !== parseInt(action.todo_id);
      });
      return new_todolist;
    }

    default:
      return state;
  }
}
