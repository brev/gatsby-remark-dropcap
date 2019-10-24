var dropcap = require('remark-dropcap')

module.exports = function ({ markdownAST }) {
  var transform = dropcap()
  transform(markdownAST)
}

