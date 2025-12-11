import * as z from 'zod';

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


// SCHEMA VALIDATION WITH ZOD

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
})


export const getTaskInitialState = (): TaskState => {
  const cleanInitialState = {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  };
  const localStorageState = localStorage.getItem('task-state');

  if (!localStorageState) {
    return cleanInitialState;
  }

  // Schema validation with zod
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return cleanInitialState;
  }

  return result.data;
}


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
          return {
            ...todo,
            completed: !todo.completed,
          }
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
