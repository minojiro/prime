export const primeNumberList = (max = 97): number[] => {
  const a = Array.from({ length: max + 1 }, () => true);
  a[0] = false;
  a[1] = false;
  for (let i = 2; i < a.length; i++) {
    if (a[i]) {
      for (let j = i + i; j < a.length; j += i) {
        a[j] = false;
      }
    }
  }
  const primes: number[] = [];
  for (let i = 2; i < a.length; i++) {
    if (a[i]) {
      primes.push(i);
    }
  }
  return primes;
};
