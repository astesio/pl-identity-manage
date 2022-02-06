export interface Controller<TEvent, TResult> {
  handle(request: TEvent): Promise<TResult>;
}
