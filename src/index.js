import deepResolve from 'deep-resolve'

export default (f) => (...args) => deepResolve(args).then((args) => f(...args))
