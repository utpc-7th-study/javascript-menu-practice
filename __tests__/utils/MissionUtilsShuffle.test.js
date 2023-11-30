import { Random } from '@woowacourse/mission-utils';

describe('Randoms.shuffle 의 반환값을 확인한다.', () => {
  test('배열의 각 요소가 숫자가 아니면 예외가 발생한다', () => {
    expect(() => Random.shuffle(['우동'])).toThrow();
  });
});
