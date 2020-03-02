import { toggleChecked } from '../../models/task/taskService';

export default async function toogleDone(taskId: number): Promise<void> {
  await toggleChecked(taskId);
}
