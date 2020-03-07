import { Task } from '../../domain/model/Task';
import { TaskDeliveryStateRepository } from './TaskDeliveryStateRepository';

export interface StateRepositoryProps {
  dispatchAdd: Function;
  dispatchRemove: Function;
  dispatchUpdate: Function;
}

export class TaskStateRepository extends TaskDeliveryStateRepository<
  StateRepositoryProps
> {
  private constructor(props: StateRepositoryProps) {
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

  static create(props: StateRepositoryProps) {
    return new TaskStateRepository(props);
  }
}
