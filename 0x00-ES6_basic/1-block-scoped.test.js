import taskBlock from './1-block-scoped.js';

test('returns the right values', () => {
  // Both cases should return [false, true]
  expect(taskBlock(true)).toEqual([false, true]);
  expect(taskBlock(false)).toEqual([false, true]);
});
