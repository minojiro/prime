# prime number list

## Usage

install package

```bash
npm install prime-numbers
```

use prime numbers

```ts
import { primeNumberList } from "prime-number-list";
const list = primeNumberList(10)
console.log(list)  // 2, 3, 5, 7
```

You can specify the maximum value with an argument. The default value is 97.

## Development

To install dependencies:

```bash
bun install
```

To test:

```bash
bun test
```

This project was created using `bun init` in bun v1.0.24. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
