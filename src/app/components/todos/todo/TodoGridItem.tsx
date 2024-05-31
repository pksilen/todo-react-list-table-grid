import { IconButton } from '../../../common/components/buttons/IconButton';
import { EditIcon, RemoveIcon, TodoIcon } from '../../../common/components/icons/Icons';
import { Todo } from '../../../stores/todos/Todo';
import classes from './TodoGridItem.module.scss';
import { useTodo } from './useTodo';


type Props = {
  readonly todo: Todo;
};

export const TodoGridItem = ({ todo: { id, title, isDone } }: Props) => {
  const { removeTodo, setEditableTodo } = useTodo();

  return (
    <div className={classes.todo}>
      <TodoIcon color={isDone ? 'success' : 'error'} />
      <div>{title}</div>
      <div className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={() => setEditableTodo(id)} />
        <IconButton icon={<RemoveIcon />} onClick={() => removeTodo(id)} />
      </div>
    </div>
  );
};