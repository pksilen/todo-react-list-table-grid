import React from 'react';
import { Todo } from 'app/stores/todos/Todo';
import { GridLayout } from '../../common/components/grid/GridLayout';
import { PendingTodos } from './PendingTodos';
import { TodoGridItem } from './todo/TodoGridItem';
import { useTodos } from './useTodos';


export const TodosGrid = () => {
  const shownTodos = useTodos();

  return (
    <PendingTodos>
      <GridLayout gap="50px">
        {shownTodos.map((todo: Todo) => (
          <TodoGridItem key={todo.id} todo={todo} />
        ))}
      </GridLayout>
    </PendingTodos>
  );
};
