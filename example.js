'use strict';

var getPage = require('summarizer').getPage;

var uri = 'http://hapijs.com/tutorials';

getPage(uri).then(function (data) {
  console.log(JSON.stringify(data, null, 2));
}, console.error);
