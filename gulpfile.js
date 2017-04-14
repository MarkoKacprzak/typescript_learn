var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');
//var tslint = require('gulp-tslint');
var gulpTslint = require("gulp-tslint");
var tslint = require("tslint");
var fss = require('fs');

var programLint = tslint.Linter.createProgram("./tsconfig.json");

const tslintOptions = {
    configuration: {},
    formatter: "prose",
    formattersDirectory: null,
    rulesDirectory: null,
    tslint: null,
    program: null
};

const reportOptions = {
    emitError: true,
    reportLimit: 0,
    summarizeFailureOutput: true
};

var paths = {
  tscripts : { 
    src : ['app/src/**/*.ts'],
    dest : 'app/build' }
};

gulp.task('default', ['lint', 'buildrun']);

// ** Running ** //

gulp.task('run', shell.task([
  'node app/build/index.js'
]));

gulp.task('buildrun', function (cb) {
  runseq('build', 'run', cb);
});

// ** Watching ** //
gulp.task('watch', function () {
  gulp.watch(paths.tscripts.src, ['compile:typescript']);
});

gulp.task('watchrun', function () {
  gulp.watch(paths.tscripts.src, () => 
    runseq('compile:typescript', 'run') 
   );
});

// ** Compilation ** // 

gulp.task('build', ['compile:typescript']);
gulp.task('compile:typescript', function () {
  return gulp
  .src(paths.tscripts.src)
  .pipe(tsc({
    module: "commonjs",
    emitError: false
  }))
  .pipe(gulp.dest(paths.tscripts.dest));
});

// ** Linting ** //

gulp.task('lint', ['lint:default']);
gulp.task('lint:default', function(){
      return gulp.src(paths.tscripts.src)
        .pipe(gulpTslint({ programLint }))
        .pipe(gulpTslint.report(reportOptions));
});
