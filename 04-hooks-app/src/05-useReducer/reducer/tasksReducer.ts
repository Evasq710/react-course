

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number };


// Función pura que retorna un nuevo estado TaskState
export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }

    case "DELETE_TODO": {
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
      const completed = updatedTodos.filter(todo => todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        length: updatedTodos.length,
        completed: completed,
        pending: updatedTodos.length - completed,
      }
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      const completed = updatedTodos.filter(todo => todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        completed: completed,
        pending: updatedTodos.length - completed,
      }
    }

    default:
      console.log('Action is not defined')
      return state;
  }
}
