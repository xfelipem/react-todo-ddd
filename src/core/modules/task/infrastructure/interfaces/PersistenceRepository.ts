import { Task } from '../../domain/Task';
import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';

export interface PersistenceRepository {
  add(task: Task): Promise<void>;
  remove(task: Task): Promise<void>;
  get(taskId?: UniqueEntityID): Promise<Task[]>;
}
