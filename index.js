var dropcap = require('remark-dropcap')

module.exports = function ({ markdownAST }, options) {
  var transform = dropcap(options)
  transform(markdownAST)
}

