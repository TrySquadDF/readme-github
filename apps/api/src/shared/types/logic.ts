type PickFromArray<A extends unknown[]> = A[number];

type ExtractProperty<T, K extends string> = NonNullable<T> extends infer U
  ? U extends { [P in K]: unknown }
    ? U[K]
    : never
  : never;

type Maybe<T> = T | null; 

export type { PickFromArray, ExtractProperty , Maybe };