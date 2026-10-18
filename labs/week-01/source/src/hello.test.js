const { test } = require('node:test');
const assert = require('node:assert/strict');
const { student, createGreeting } = require('./hello.js');
test('greeting includes provided student identity and runtime', () => {
  assert.equal(student.studentId, '68543210036-8');
  assert.equal(createGreeting(student), 'Hello Pasit Petoumphun (68543210036-8) | OS: ' + process.platform + ' | Node: ' + process.version);
});
