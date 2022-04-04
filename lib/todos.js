import axios from "axios";

export async function apiGetTodos() {
  const {
    data: { todos },
  } = await axios({
    method: "GET",
    url: "https://fswdi-api-todos.herokuapp.com/api/todos",
  });

  return todos;
}

export async function apiGetTodoIds() {
  const {
    data: { todos },
  } = await axios({
    method: "GET",
    url: 'https://fswdi-api-todos.herokuapp.com/api/todos',
  });

  return todos.map((todo) => ({
    params: {
      id: String(todo.id),
    },
  }));
}

export async function apiGetTodo(id) {
  try {
    const {
      data: { todo },
    } = await axios({
      method: "GET",
      url: `https://fswdi-api-todos.herokuapp.com/api/todos/${id}`,
    });

    return todo;
  } catch (error) {
    return null;
  }
}
