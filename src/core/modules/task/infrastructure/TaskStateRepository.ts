import { Task } from '../domain/Task';
import { Repository } from '../../../shared/infrastructure/Repository';
import { StateRepository } from './interfaces/StateRepository';

export interface StateRepositoryProps {
  dispatchAdd: Function;
  dispatchRemove: Function;
  dispatchUpdate: Function;
}

export class TaskStateRepository extends Repository<StateRepositoryProps>
  implements StateRepository {
  public constructor(props: StateRepositoryProps) {
    super(props);
  }

  public add(task: Task): void {
    this.props.dispatchAdd(task);
  }

  public remove(task: Task): void {
    this.props.dispatchRemove(task);
  }

  public update(tasks: Task[]): void {
    this.props.dispatchUpdate(tasks);
  }
}
