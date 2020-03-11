import { Task } from '../../../core/modules/task/domain/Task';
import { ADD_ACTION_TYPE, REMOVE_ACTION_TYPE, StateAction, UPDATE_ACTION_TYPE } from './taskActions';

export interface TaskState {
  tasks: Task[];
  newTaskText: string;
  dispatch: Function;
}

export const initialTaskState: TaskState = {
  tasks: [],
  newTaskText: '',
  dispatch: () => {},
};

export function taskReducer(
  state: TaskState = initialTaskState,
  action: StateAction
): TaskState {
  switch (action.type) {
    case ADD_ACTION_TYPE:
      return { ...state, tasks: [...state.tasks, action.payload.task] };
    case UPDATE_ACTION_TYPE:
      return { ...state, tasks: [action.payload.tasks] };
    case REMOVE_ACTION_TYPE:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task: Task) => task.id !== action.payload.taskId
        ),
      };
    default:
      throw new Error('Unhandled action');
  }
}
