import { useState, useEffect } from 'react';
import { removeTask } from '../../domain/models/task/taskRepository';
import fetchTasks from '../../domain/actions/task/fetchTasks';
import Task from '../../domain/models/task/Task';

const useTaskCollection = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteTask = async (id: number) => {
    await removeTask(id);
    setTasks(await fetchTasks());
  };

  const createTask = (task: Task) => setTasks([...tasks, task]);

  useEffect(() => {
    fetchTasks().then(tasks => setTasks(tasks));
  }, [setTasks, tasks]);

  return { tasks, deleteTask, createTask };
};

export default useTaskCollection;
