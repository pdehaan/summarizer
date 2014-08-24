'use strict';

var getPage = require('summarizer').getPage;

var uri = 'http://nodejs.org/api/documentation.html';

getPage(uri).then(function (data) {
  console.log(JSON.stringify(data, null, 2));
}, console.error);
