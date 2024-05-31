import { ViewType } from '../../stores/controls/controlsStore';
import { TodosGrid } from './TodosGrid';
import { TodosList } from './TodosList';
import { TodosTable } from './TodosTable';


export const createTodosView = (viewType: ViewType) => {
  switch (viewType) {
    case 'list':
      return <TodosList />;
    case 'table':
      return <TodosTable />;
    case 'grid':
      return <TodosGrid />;
  }
};
