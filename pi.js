function pi(iterations) {
  let numberOfPointsInsideRadius = 0;
  for (let i = 0; i < iterations; i++) {
    const x = Math.random();
    const y = Math.random();
    const distance = x ** 2 + y ** 2;
    if (distance < 1) {
      numberOfPointsInsideRadius += 1;
    }
  }
  return 4 * numberOfPointsInsideRadius / iterations;
}

const iterations = 100000000;
const result = pi(iterations);
console.log(iterations, result);