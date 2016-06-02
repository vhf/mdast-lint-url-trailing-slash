'use strict';

var visit = require('unist-util-visit');
var url = require('url');

function checkURL(ast, file, preferred, done) {
  visit(ast, 'link', function (node) {
    var nodeUrl = node.url;
    if (nodeUrl) {
      var parsed = url.parse(nodeUrl);
      var target = parsed.href;

      if (target.endsWith('/')) {
        file.warn('Remove trailing slash (' + target + ')', node);
      }
    }
  });

  done();
}

module.exports = {
  'trailing-slash': checkURL
};