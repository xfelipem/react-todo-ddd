import { UseCase } from '../../../shared/domain/UseCase';
import { Task } from '../domain/Task';
import { TaskPersistenceRepository } from '../infrastructure/TaskPersistenceRepository';
import { TaskStateRepository } from '../infrastructure/TaskStateRepository';

export interface RemoveTaskUseCaseProps {
  taskDeliveryStateRepository: TaskStateRepository;
}

export class RemoveTaskUseCase extends UseCase<RemoveTaskUseCaseProps> {
  private taskPersistenceRepository: TaskPersistenceRepository;
  private constructor(CreateTaskUseCaseProps: RemoveTaskUseCaseProps) {
    super(CreateTaskUseCaseProps);

    this.taskPersistenceRepository = TaskPersistenceRepository.create();
  }

  public execute(task: Task) {
    this.taskPersistenceRepository.remove(task);
    this.props.taskDeliveryStateRepository.remove(task);
  }

  static create(props: RemoveTaskUseCaseProps) {
    return new RemoveTaskUseCase(props);
  }
}
