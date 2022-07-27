import * as sum from '@/utils/utils';

test('sum number in JavaScript', () => {
  const c = sum(22, 33);

  expect(c).toBe(55);
});
