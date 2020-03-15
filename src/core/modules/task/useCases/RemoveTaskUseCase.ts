import { UseCase } from '../../../shared/domain/UseCase';
import { Task } from '../domain/Task';
import { PersistenceRepository } from '../infrastructure/interfaces/PersistenceRepository';
import { StateRepository } from '../infrastructure/interfaces/StateRepository';

export interface RemoveTaskUseCaseProps {
  taskDeliveryStateRepository: StateRepository;
  taskPersistenceRepository: PersistenceRepository;
}

export class RemoveTaskUseCase extends UseCase<RemoveTaskUseCaseProps> {
  private constructor(CreateTaskUseCaseProps: RemoveTaskUseCaseProps) {
    super(CreateTaskUseCaseProps);
  }

  public execute(task: Task) {
    this.props.taskPersistenceRepository.remove(task);
    this.props.taskDeliveryStateRepository.remove(task);
  }

  static create(props: RemoveTaskUseCaseProps) {
    return new RemoveTaskUseCase(props);
  }
}
