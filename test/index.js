import 'native-promise-only'
import test from 'tape'
import asPromised from '../'

function check (name, expected, args, expectedThis, givenThis) {
  test(name, function (t) {
    t.plan(2);
    asPromised(function (...actual) {
      t.deepEqual(actual, expected);
      t.deepEqual(this, expectedThis);
    }).apply(givenThis, args);
  });
}

check('no arguments', [], []);
check('promise argument', ['v'], [Promise.resolve('v')]);
check('multiple arguments', [1, 'v'], [1, Promise.resolve('v')]);
check('object containing a promise', [{k: 'v'}], [{k: Promise.resolve('v')}]);
