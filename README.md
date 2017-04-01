# fake-history-fns

fake-history functions.

## Installation

```
$ npm install fake-history-fns
```

## Usage

```ts
import * as assert from 'assert';
import {
  back,
  create,
  current,
  currentState,
  length,
  next,
  nextState,
  previous,
  previousState,
  pushState,
  state
} from 'fake-history-fns';

const p0 = create();
const p1 = pushState(p0, 1, '1', '/1');
const p2 = pushState(p1, 2, '2', '/2');
const p3 = pushState(p2, 3, '3', '/3');
const b1 = back(p0);

assert(length(b1) === 3);
assert(state(b1) === 2);

assert(current(b1) === '/2');
assert(currentState(b1) === 2);
assert(next(b1) === '/3');
assert(nextState(b1) === 3);
assert(previous(b1) === '/1');
assert(previousState(b1) === 1);
```

## Development

```
$ yarn
$ npm run watch
```

## Badges

[![Travis CI][travisci-badge-url]][travisci-url]

[travisci-badge-url]: https://travis-ci.org/bouzuya/fake-history-fns.svg
[travisci-url]: https://travis-ci.org/bouzuya/fake-history-fns

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
