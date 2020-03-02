import Task from './Task';

let tasks: Task[] = [];

export async function addTask(task: Task): Promise<void> {
  tasks.push(task);
}

export async function getAllTasks(): Promise<Task[]> {
  return tasks;
}

export async function getTask(taskId: number): Promise<Task | undefined> {
  return tasks.find((task: Task) => task.id === taskId);
}

export async function removeTask(taskId: number): Promise<void> {
  tasks = tasks.filter((storedTask: Task) => storedTask.id !== taskId);
}
