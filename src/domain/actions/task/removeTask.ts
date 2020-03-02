import { remove } from '../../models/task/taskService';

export default async function removeTask(taskId: number): Promise<void> {
  await remove(taskId);
}
