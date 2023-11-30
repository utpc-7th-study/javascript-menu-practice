import shuffleArray from '../../src/utils/shuffleArray';

describe('shuffleArray test', () => {
  test('섞인 배열의 모든값은 undefined가 아니여야한다', () => {
    // given
    const menus = ['우동', '스시', '돈까스', '라멘', '돈부리'];

    // when
    const result = shuffleArray(menus);

    // then
    expect(result).not.toContain(undefined);
  });

  test('섞인 배열의 길이는 원래 배열의 길이와 같아야 한다.', () => {
    // given
    const menus = ['우동', '스시', '돈까스', '라멘', '돈부리'];

    // when
    const result = shuffleArray(menus);

    // then
    expect(result).toHaveLength(menus.length);
  });

  test('원래 배열의 요소가 모두 포함되어야 하고 원래 배열 이외의 값이 들어가면 안된다', () => {
    // given
    const menus = ['우동', '스시', '돈까스', '라멘', '돈부리'];

    // when
    const result = shuffleArray(menus);

    // then
    expect(result).toEqual(expect.arrayContaining(menus));
    expect(result.every((shuffleMenu) => menus.includes(shuffleMenu))).toBe(
      true,
    );
  });
});
