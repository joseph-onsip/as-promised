import deepResolve from 'deep-resolve'

export default (f) => (
  function (...args) {
    return deepResolve([this, args])
      .then(thisArgs => f.apply(...thisArgs))
  }
)
