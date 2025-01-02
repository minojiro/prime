import { it, expect } from "bun:test";
import { primeNumberList } from "./";

it("primeNumberList", () => {
  // If the argument is omitted, the number is limited to 97.
  expect(primeNumberList()).toMatchObject([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]);

  expect(primeNumberList(-1)).toMatchObject([]);
  expect(primeNumberList(0)).toMatchObject([]);
  expect(primeNumberList(1)).toMatchObject([]);
  expect(primeNumberList(2)).toMatchObject([2]);
  expect(primeNumberList(18)).toMatchObject([2, 3, 5, 7, 11, 13, 17]);
  expect(primeNumberList(19)).toMatchObject([2, 3, 5, 7, 11, 13, 17, 19]);
  expect(primeNumberList(20)).toMatchObject([2, 3, 5, 7, 11, 13, 17, 19]);

  const bigPrimeSet = new Set(primeNumberList(10 ** 5));
  expect(bigPrimeSet).toContain(257);
  expect(bigPrimeSet).not.toContain(256);
  expect(bigPrimeSet).toContain(65537);
  expect(bigPrimeSet).not.toContain(65538);
});

it("perf", () => {
  const max = 10 ** 7;
  const times: number[] = [];
  for (let i = 1; i <= 3; i++) {
    const t1 = performance.now();
    expect(primeNumberList(max).length).toBeGreaterThan(10);
    const precessingTime = performance.now() - t1;
    console.log(`${i}: ${precessingTime}ms`);
    times.push(precessingTime);
  }
  const ave = times.reduce((sum, t) => sum + t) / times.length;
  console.log(
    `🕰️ Average Perf: ${Math.round(ave)}ms (max: ${max.toLocaleString()})`
  );
  expect(ave).toBeLessThan(1_000);
});
