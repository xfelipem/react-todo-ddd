import Task from './Task';
import TaskDTO from './TaskDTO';
import { addTask, getTask, removeTask, getAllTasks } from './taskRepository';

export async function create(taskDTO: TaskDTO): Promise<void> {
  const newTask: Task = { ...taskDTO, id: Date.now() };
  await addTask(newTask);
}

export async function getTasks(): Promise<Task[]> {
  return await getAllTasks();
}

export async function toggleChecked(taskId: number): Promise<void> {
  const task: Task | undefined = await getTask(taskId);
  if (task) {
    task.checked = !task.checked;
  }
}

export async function remove(taskId: number): Promise<void> {
  await removeTask(taskId);
}
