import TaskDTO from '../../models/task/TaskDTO';
import { create } from '../../models/task/taskService';

export default async function createTask(taskDTO: TaskDTO): Promise<void> {
  await create(taskDTO);
}
