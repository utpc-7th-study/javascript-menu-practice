class Validator {
  IsValidMenu(menus = [], cantTry = []) {
    const noValidMenu = menus.filter((menu) => cantTry.includes(menu));
    if (noValidMenu.length > 0) throw new Error('[ERROR]');
  }
}

const aa = new Validator();

aa.IsValidMenu(['aa', 'nbb', 'cc'], ['aa', 'ss']);
