import { UseCase } from '../../../../shared/domain/UseCase';
import { TaskPersistenceRepository } from '../../infrastructure/task/TaskPersistenceRepository';
import { TaskStateRepository } from '../../infrastructure/task/TaskStateRepository';

export interface UpdateTasksUseCaseProps {
  taskDeliveryStateRepository: TaskStateRepository;
}

export class UpdateTasksUseCase extends UseCase<UpdateTasksUseCaseProps> {
  private taskPersistenceRepository: TaskPersistenceRepository;
  private constructor(CreateTaskUseCaseProps: UpdateTasksUseCaseProps) {
    super(CreateTaskUseCaseProps);

    this.taskPersistenceRepository = TaskPersistenceRepository.create();
  }

  public execute() {
    const tasks = this.taskPersistenceRepository.taskCollection;
    this.props.taskDeliveryStateRepository.update(tasks);
  }

  static create(props: UpdateTasksUseCaseProps) {
    return new UpdateTasksUseCase(props);
  }
}
