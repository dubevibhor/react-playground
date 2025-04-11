function swapVariables<T, U>(a: T, b: U) {
  return [b, a];
}
swapVariables<number, string>(1, "a");
