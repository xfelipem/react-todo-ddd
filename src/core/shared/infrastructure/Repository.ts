export abstract class Repository<T> {
  protected constructor(protected props: T) {}
}
