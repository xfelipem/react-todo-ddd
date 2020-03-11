import { Task } from '../domain/Task';

export class TaskPersistenceRepository {
  private tasks: Task[] = [];
  private constructor() {}

  get taskCollection() {
    return this.tasks;
  }

  set taskCollection(tasks) {
    this.tasks = tasks;
  }

  public add(task: Task): void {
    this.tasks.push(task);
  }

  public remove(task: Task): void {
    this.taskCollection = this.taskCollection.filter(
      (storedTask: Task) => !storedTask.id.equals(task.id)
    );
  }

  static create() {
    return new TaskPersistenceRepository();
  }
}
