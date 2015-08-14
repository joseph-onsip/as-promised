# as-promised
Decorates a function to accept and return Promises.

```javascript
var asPromised = require('as-promised');

var logp = asPromised(console.log);
logp(Promise.resolve(2)); // prints 2

var maxp = asPromised(Math.max);
logp(maxp(2, Promise.resolve(3))); // prints 3
```
