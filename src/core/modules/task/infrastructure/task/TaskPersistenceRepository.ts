import { Task } from '../../domain/model/Task';

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
      (storedTask: Task) => storedTask.id !== task.id
    );
  }

  static create() {
    return new TaskPersistenceRepository();
  }
}
