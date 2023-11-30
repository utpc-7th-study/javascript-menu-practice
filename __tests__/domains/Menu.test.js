import AsianMenu from '../../src/domains/menu/AsianMenu';
import ChinaMenu from '../../src/domains/menu/ChinaMenu';
import WestMenu from '../../src/domains/menu/WestMenu';
import KorMenu from '../../src/domains/menu/KorMenu';
import JapMenu from '../../src/domains/menu/JapMenu';
import Menu from '../../src/domains/menu/Menu';

describe('extends test', () => {
  test('상속받은 클래스는 모두 Menu의 인스턴스여야 한다.', () => {
    // given
    const menus = [
      new AsianMenu(),
      new ChinaMenu(),
      new WestMenu(),
      new KorMenu(),
      new JapMenu(),
    ];

    // when
    const result = menus.every((menu) => menu instanceof Menu);

    // then
    expect(result).toBe(true);
  });

  test('Menu로부터 상속받은 클래스는 _getMenus 메소드를 구현해야 한다.', () => {
    const NOT_IMPLEMENTED_METHOD_CLASS = class extends Menu {};

    expect(() => new NOT_IMPLEMENTED_METHOD_CLASS()).toThrow();
  });
});

describe('method : getMenu test', () => {
  // eslint-disable-next-line array-callback-return
  Array.from({ length: 5 }, (_, idx) => {
    test(`excute ${
      idx + 1
    } : 해당 메뉴들에 arg로 전달받은 못먹는 음식이 있을때 반환값에 못먹는 음식이 포함되지 않아야 한다.`, () => {
      // given
      const NOT_EAT_MENUS = ['우동', '스시'];

      // when
      const result = new JapMenu().getMenu(NOT_EAT_MENUS);

      // then
      NOT_EAT_MENUS.forEach((notEatMenu) => {
        expect(result).not.toBe(notEatMenu);
      });
    });
  });
});
