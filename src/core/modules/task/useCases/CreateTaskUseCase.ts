import { UseCase } from '../../../shared/domain/UseCase';
import { Task } from '../domain/Task';
import { TaskText } from '../domain/TaskText';
import { PersistenceRepository } from '../infrastructure/interfaces/PersistenceRepository';
import { StateRepository } from '../infrastructure/interfaces/StateRepository';

export interface CreateTaskUseCaseProps {
  taskDeliveryStateRepository: StateRepository ;
  taskPersistenceRepository: PersistenceRepository;
}

export class CreateTaskUseCase extends UseCase<CreateTaskUseCaseProps> {

  private constructor(createTaskUseCaseProps: CreateTaskUseCaseProps) {
    super(createTaskUseCaseProps);
  }

  public execute(text: string) {
    const taskText = TaskText.create({ value: text });
    const newTask = Task.create({ text: taskText });

    this.props.taskPersistenceRepository.add(newTask);
    this.props.taskDeliveryStateRepository.add(newTask);
  }

  static create(props: CreateTaskUseCaseProps) {
    return new CreateTaskUseCase(props);
  }
}
