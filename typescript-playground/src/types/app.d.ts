export {};

declare global {
  type Optional<T> = T | undefined;
  type Nullable<T> = T | null;
  type OptNull<T> = T | undefined | null;
  type ValueListener<T> = (value: T) => void;
  type Predicate<T> = (v: T) => boolean;

  type NestedPartial<T> = {
    [P in keyof T]?: NestedPartial<T[P]>;
  };
}
