import { getUndoneTodoCount } from '../../stores/todos/todoSelectors';
import { useTodosStore } from '../../stores/todos/todosStore';

export const useHeader = () => {
  const undoneTodoCount = useTodosStore((store) => getUndoneTodoCount(store));
  const { setTodoFilter } = useTodosStore((store) => store.actions);
  return { setTodoFilter, undoneTodoCount };
};
