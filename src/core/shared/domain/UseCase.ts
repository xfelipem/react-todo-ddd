export abstract class UseCase<T> {
  constructor(protected props: T) {}
  abstract execute(arg?: any): void;
}