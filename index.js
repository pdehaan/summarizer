var Promise = require('promise');
var summarize = require('summarize');
var summary = require('node-summary');
var superagent = require('superagent');
var unfluff = require('unfluff');

var summarizeP = Promise.denodeify(summary.summarize);

module.exports.getPage = function (uri) {
  'use strict';

  return new Promise(function (resolve, reject) {
    superagentGetP(uri).then(function (data) {
      var text = data.text;
      var pageContent = unfluff(text);
      pageContent.raw = text;
      pageContent.stats = summarize(text);
      summarizeP(pageContent.title, pageContent.text).then(function (res) {
        pageContent.summary = res;
        resolve(pageContent);
      }, reject);
    }, reject);
  });
};

function superagentGetP(uri) {
  'use strict';

  return new Promise(function (resolve, reject) {
    superagent.get(uri).end(function (err, res) {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}
