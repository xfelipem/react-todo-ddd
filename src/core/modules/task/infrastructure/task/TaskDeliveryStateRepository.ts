export abstract class TaskDeliveryStateRepository<T> {
  protected constructor(protected props: T) {}
}
