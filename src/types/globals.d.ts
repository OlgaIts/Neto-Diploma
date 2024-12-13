export {};
declare global {
  interface ObjectConstructor {
    tsEntries<U, T>(o: { [key in T]: U }): [T, U][];
    tsKeys<T>(o: T): (keyof T)[];
    tsValues<T>(o: T): Array<T[keyof T]>;
  }
}
