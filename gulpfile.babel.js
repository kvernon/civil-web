'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const del = require('del');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const spawn = require('child_process').spawn;

const buildClean = () => del(['dist/**/*', 'build/**/*', 'babeled/**/*']);

const testUnit = () => {
  return gulp.src('test/unit/**/*.js', {read: false}).pipe(mocha());
};

const buildEslint = () => {
  return gulp.src(['src/!**!/!*.js', 'test/!**!/!*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
};

const buildBabel = () => {
  return gulp.src(['src/**/*.js'], {base: './src', sourcemaps: true})
    .pipe(babel())
    .pipe(gulp.dest('build'));
};

const build = gulp.series(buildClean, buildEslint, buildBabel, testUnit);

const npmPublish = (done) => {
  const npm = spawn('npm.cmd', ['publish', '--access public']);
  npm.on('close', done);
  npm.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  npm.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
};

module.exports.test = gulp.series(testUnit);
module.exports.build = build;
module.exports.buildAndPublish = gulp.series(build, npmPublish);
