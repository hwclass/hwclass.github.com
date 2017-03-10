var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now(),
		end = Date.now();

    t.equal(start, end);
});
