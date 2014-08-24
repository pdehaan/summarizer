# summarizer

[![Build Status: Travis](https://travis-ci.org/pdehaan/summarizer.svg?branch=master)](https://travis-ci.org/pdehaan/summarizer)

Scrapes a remote page and creates a summary with statistics.

This package uses a combination of the following modules:

- [summarize](https://www.npmjs.org/package/summarize) &mdash; Summarize html content.
- [node-summary](https://www.npmjs.org/package/node-summary) &mdash; Summarizes text using a naive summarization algorithm.
- [unfluff](https://www.npmjs.org/package/unfluff) &mdash; A web page content extractor.

## Installation

```sh
$ npm i summarizer
```

### Example usage

```js
'use strict';

var getPage = require('summarizer').getPage;

var uri = 'http://nodejs.org/api/documentation.html';

getPage(uri).then(function (data) {
  console.log(JSON.stringify(data, null, 2));
}, console.error);
```

#### [Example output](/example.json)

```json
{
  "title": "About this Documentation Node.js v0.10.31 Manual & Documentation",
  "lang": "en",
  "canonicalLink": "http://nodejs.org/api/documentation.html",
  "tags": [],
  "image": null,
  "videos": [],
  "text": "The goal of this documentation is to comprehensively explain the Node.js API, both from a reference as well as a conceptual point of view.  ...",
  "raw": "<!doctype html>\n<html lang=\"en\">\n...",
  "stats": {
    "ok": true,
    "sentiment": 0.018134715025906734,
    "title": "About this Documentation Node.js v0.10.31 Manual & Documentation",
    "topics": [
      "Stability",
      "change",
      "..."
    ],
    "words": 414,
    "difficulty": 0.6416666666666667,
    "minutes": 4,
    "image": null
  },
  "summary": "About this Documentation Node.js v0.10.31 Manual & Documentation..."
}

```
