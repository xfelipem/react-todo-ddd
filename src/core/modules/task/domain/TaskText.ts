import { ValueObject } from "../../../shared/domain/ValueObject";


export interface ITaskTextProps {
  value: string;
}

export class TaskText extends ValueObject<ITaskTextProps> {
  public static minLength: number = 1;

  get value(): string {
    return this.props.value;
  }

  private constructor(props: ITaskTextProps) {
    super(props);
  }

  private static isAppropriateLength(text: string): boolean {
    return text.length >= this.minLength;
  }

  public static create(props: ITaskTextProps): TaskText {
    if (!this.isAppropriateLength(props.value)) {
      throw new Error(
        `Text doesnt meet criteria [${this.minLength} chars min].`
      );
    }

    return new TaskText({ value: props.value });
  }
}
