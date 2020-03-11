import { Task } from '../../../core/modules/task/domain/Task';
import { TaskStateRepository } from '../../../core/modules/task/infrastructure/TaskStateRepository';
import { CreateTaskUseCase } from '../../../core/modules/task/useCases/CreateTaskUseCase';
import { RemoveTaskUseCase } from '../../../core/modules/task/useCases/RemoveTaskUseCase';
import { UpdateTasksUseCase } from '../../../core/modules/task/useCases/UpdateTasksUseCase';

export interface StateAction {
  payload: any;
  type: string;
}

export const ADD_ACTION_TYPE = 'add';
export const REMOVE_ACTION_TYPE = 'remove';
export const UPDATE_ACTION_TYPE = 'update';

function dispatchAddTask(dispatch: Function, task: Task): void {
  dispatch({ type: ADD_ACTION_TYPE, payload: { task } });
}

function dispatchRemoveTask(dispatch: Function, task: Task): void {
  dispatch({ type: REMOVE_ACTION_TYPE, payload: { taskId: task.id } });
}

function dispatchUpdateTasks(dispatch: Function, tasks: Task[]): void {
  dispatch({ type: UPDATE_ACTION_TYPE, payload: { tasks } });
}

export function getTaskActionDispatchers(dispatch: Function) {
  const taskDeliveryStateRepository = TaskStateRepository.create({
    dispatchAdd: (task: Task) => dispatchAddTask(dispatch, task),
    dispatchRemove: (task: Task) => dispatchRemoveTask(dispatch, task),
    dispatchUpdate: (tasks: Task[]) => dispatchUpdateTasks(dispatch, tasks),
  });

  return {
    createTask: (taskText: string): void =>
      CreateTaskUseCase.create({
        taskDeliveryStateRepository,
      }).execute(taskText),
    deleteTask: (task: Task) =>
      RemoveTaskUseCase.create({
        taskDeliveryStateRepository,
      }).execute(task),
    updateTasks: () =>
      UpdateTasksUseCase.create({
        taskDeliveryStateRepository,
      }).execute(),
  };
}
