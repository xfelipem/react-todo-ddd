import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { TaskText } from './TaskText';

export type TaskId = number;

export interface TaskProps {
  text: TaskText;
}

export class Task extends AggregateRoot<TaskProps> {
  private constructor(props: TaskProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get text(): TaskText {
    return this.props.text;
  }

  set text(newText: TaskText) {
    this.props.text = newText;
  }

  static create(props: TaskProps) {
    return new Task(props, new UniqueEntityID());
  }
}
