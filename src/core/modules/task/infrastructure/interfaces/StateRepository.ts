import { Task } from '../../domain/Task';

export interface StateRepository {
  add(task: Task): void;
  remove(task: Task): void;
  update(tasks: Task[]): void;
}
