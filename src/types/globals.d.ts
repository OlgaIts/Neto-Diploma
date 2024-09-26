export {};
// declare global {
//   interface ObjectConstructor {
//     typedKeys<T>(obj: T): Array<keyof T>;
//   }
// }
// Object.typedKeys = Object.keys as any;

declare global {
  interface ObjectConstructor {
    tsEntries<U, T>(o: { [key in T]: U }): [T, U][];
    tsKeys<T>(o: T): (keyof T)[];
  }
}
