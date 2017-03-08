require('./server'); // run the server

const cp = require('child_process');
const chokidar = require('chokidar');

run('build-css');
run('build-js');

chokidar.watch('css/**/*.styl')
  .on('change', path => run('build-css'));

chokidar.watch('js/**/*.js')
  .on('change', path => run('build-js'));

chokidar.watch('public/js/main.js')
  .on('change', path => run('uglify-js'));

function run (scriptName) {
	const child = cp.spawn('npm', ['run', scriptName]);
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
}