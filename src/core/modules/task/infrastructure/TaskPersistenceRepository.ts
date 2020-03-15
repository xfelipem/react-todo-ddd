import { PersistenceRepository } from './interfaces/PersistenceRepository';
import { Task } from '../domain/Task';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';

export class TaskInMemoryRepository implements PersistenceRepository {
  private tasks: Task[] = [];
  public get(taskId?: UniqueEntityID): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }

  get taskCollection() {
    return this.tasks;
  }

  set taskCollection(tasks) {
    this.tasks = tasks;
  }

  public async add(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  public async remove(task: Task): Promise<void> {
    this.taskCollection = this.taskCollection.filter(
      (storedTask: Task) => !storedTask.id.equals(task.id)
    );
  }
}
