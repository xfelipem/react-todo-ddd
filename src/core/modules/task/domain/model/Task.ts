import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';

export type TaskText = string;
export type TaskId = number;

export interface TaskProps {
  text: TaskText;
}

export class Task extends AggregateRoot<TaskProps> {
  private constructor(props: TaskProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get text(): string {
    return this.props.text;
  }

  set text(newText: string) {
    this.props.text = newText;
  }

  static create(text: TaskText) {
    return new Task({ text }, new UniqueEntityID());
  }
}
