var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

  test('a test', function (t) {
    t.ok(true);
    t.end();
  });