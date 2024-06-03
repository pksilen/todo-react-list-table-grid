import { IconButton } from '../../../common/components/buttons/IconButton';
import { EditIcon, RemoveIcon, TodoIcon } from '../../../common/components/icons/Icons';
import { Todo } from '../../../stores/todos/Todo';
import classes from './TodoGridItem.module.scss';
import { useTodo } from './useTodo';


type Props = {
  readonly todo: Todo;
};

export const TodoGridItem = ({ todo: { id, title, isDone } }: Props) => {
  const { remove, setAsEditable } = useTodo(id);

  return (
    <div className={classes.todo}>
      <TodoIcon color={isDone ? 'success' : 'error'} />
      <div>{title}</div>
      <div className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={setAsEditable} />
        <IconButton icon={<RemoveIcon />} onClick={remove} />
      </div>
    </div>
  );
};
