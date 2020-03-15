import { UseCase } from '../../../shared/domain/UseCase';
import { PersistenceRepository } from '../infrastructure/interfaces/PersistenceRepository';
import { StateRepository } from '../infrastructure/interfaces/StateRepository';

export interface UpdateTasksUseCaseProps {
  taskDeliveryStateRepository: StateRepository;
  taskPersistenceRepository: PersistenceRepository;
}

export class UpdateTasksUseCase extends UseCase<UpdateTasksUseCaseProps> {
  private constructor(CreateTaskUseCaseProps: UpdateTasksUseCaseProps) {
    super(CreateTaskUseCaseProps);
  }

  public execute() {
    this.props.taskPersistenceRepository
      .get()
      .then(tasks =>
        this.props.taskDeliveryStateRepository.update(
          Array.isArray(tasks) ? tasks : [tasks]
        )
      );
  }

  static create(props: UpdateTasksUseCaseProps) {
    return new UpdateTasksUseCase(props);
  }
}
