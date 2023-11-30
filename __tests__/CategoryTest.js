import Category from '../src/domains/Category.js';

describe('Category 클래스 테스트', () => {
  test.each([
    [
      [1, 2, 3, 4, 5],
      ['일식', '한식', '중식', '아시안', '양식'],
    ],
    [
      [1, 1, 2, 2, 3],
      ['일식', '일식', '한식', '한식', '중식'],
    ],
    [
      [2, 3, 4, 4, 5],
      ['한식', '중식', '아시안', '아시안', '양식'],
    ],
  ])('카테고리 추천', (randomNumbers, recommendedCategoreis) => {
    // given
    const category = new Category();

    // when
    const categories = category.choose(randomNumbers);

    // then
    expect(categories).toStrictEqual(recommendedCategoreis);
  });
});
