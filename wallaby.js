module.exports = wallaby => ({
  files: ['src/**/*.js'],
  tests: ['test/unit/**/*.js'],
  env: {
    type: 'node'
  },
  testFramework: 'mocha',
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  delays: {
    run: 50
  }
});
