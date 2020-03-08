import { UseCase } from '../../../../shared/domain/UseCase';
import { Task } from '../../domain/model/Task';
import { TaskPersistenceRepository } from '../../infrastructure/task/TaskPersistenceRepository';
import { TaskStateRepository } from '../../infrastructure/task/TaskStateRepository';

export interface CreateTaskUseCaseProps {
  taskDeliveryStateRepository: TaskStateRepository;
}

export class CreateTaskUseCase extends UseCase<CreateTaskUseCaseProps> {
  private taskPersistenceRepository: TaskPersistenceRepository;
  
  private constructor(CreateTaskUseCaseProps: CreateTaskUseCaseProps) {
    super(CreateTaskUseCaseProps);

    this.taskPersistenceRepository = TaskPersistenceRepository.create();
  }

  public execute(taskText: string) {
    const newTask = Task.create(taskText);

    this.taskPersistenceRepository.add(newTask);
    this.props.taskDeliveryStateRepository.add(newTask);
  }

  static create(props: CreateTaskUseCaseProps) {
    return new CreateTaskUseCase(props);
  }
}
