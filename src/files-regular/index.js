'use strict'

const moduleConfig = require('../utils/module-config')

module.exports = (arg) => {
  const send = moduleConfig(arg)

  return {
    add: require('../files-regular/add')(send),
    addReadableStream: require('../files-regular/add-readable-stream')(send),
    addPullStream: require('../files-regular/add-pull-stream')(send),
    addFromFs: require('../files-regular/add-from-fs')(send),
    addFromURL: require('../files-regular/add-from-url')(send),
    addFromStream: require('../files-regular/add')(send),
    cat: require('../files-regular/cat')(send),
    catReadableStream: require('../files-regular/cat-readable-stream')(send),
    catPullStream: require('../files-regular/cat-pull-stream')(send),
    get: require('../files-regular/get')(send),
    getReadableStream: require('../files-regular/get-readable-stream')(send),
    getPullStream: require('../files-regular/get-pull-stream')(send),
    ls: require('../files-regular/ls')(send),
    lsReadableStream: require('../files-regular/ls-readable-stream')(send),
    lsPullStream: require('../files-regular/ls-pull-stream')(send)
  }
}
