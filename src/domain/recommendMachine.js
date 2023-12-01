import Japanese from './menu/japanese';
import Korean from './menu/korean';
import Chinese from './menu/chinese';
import Asian from './menu/asian';
import Western from './menu/western';

class RecommendMachine {
  #menus = [new Japanese(), new Korean(), new Chinese(), new Asian(), new Western()];

  recommend(categoryNumber) {
    const recommendMenu = this.#menus[categoryNumber].recommend();

    return recommendMenu;
  }

  category(categoryNumber) {
    return this.#menus[categoryNumber].koreanCategory();
  }
}

export default RecommendMachine;
