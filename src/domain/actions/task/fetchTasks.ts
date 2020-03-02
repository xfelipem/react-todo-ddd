import Task from "../../models/task/Task";
import { getTasks } from "../../models/task/taskService";

export default async function fetchTasks(): Promise<Task[]> {
  return await getTasks();
}
