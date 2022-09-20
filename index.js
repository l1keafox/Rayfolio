const pug = require('pug');

// Compile template.pug, and render a set of data
console.log(pug.renderFile('index3.html', {
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"