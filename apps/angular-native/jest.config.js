module.exports = {
  name: 'angular-native',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-native',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
