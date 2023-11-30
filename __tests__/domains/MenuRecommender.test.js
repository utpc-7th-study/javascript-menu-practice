import MenuRecommender from '../../src/domains/MenuRecommender';

describe('method : validateNotEatMenu', () => {
  test.each(['치환', 'KFC', '맥고나걸'])(
    '모든 카테고리에 없는 메뉴를 입력했을때 예외가 발생해야 한다',
    (invalidMenu) => {
      // given
      const notEatMenu = invalidMenu;

      // when
      // then
      expect(() => {
        new MenuRecommender().validateNotEatMenu(notEatMenu);
      }).toThrow();
    },
  );
});
