import 'native-promise-only'
import test from 'tape'
import asPromised from '../'

function check (name, expected, args) {
  test(name, function (t) {
    t.plan(1);
    asPromised((...actual) => t.deepEqual(actual, expected)).apply(null, args)
  });
}

check('no arguments', [], []);
check('promise argument', ['v'], [Promise.resolve('v')]);
check('multiple arguments', [1, 'v'], [1, Promise.resolve('v')]);
check('object containing a promise', [{k: 'v'}], [{k: Promise.resolve('v')}]);
