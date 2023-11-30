import Controller from './domains/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    const coaches = await this.#readCoachNames();
    await this.#readHateMenus(coaches);
  }

  async #readCoachNames() {
    const coaches = await this.controller.readCoachNames();
    this.controller.setCoaches(coaches);

    return coaches;
  }

  async #readHateMenus(coaches) {
    let index = 0;
    while (index < coaches.length) {
      const coach = coaches[index];
      const hateMenus = await this.controller.readHateMenus(coach);
      this.controller.setHateMenus(coach, hateMenus);
      index += 1;
    }
  }
}

const app = new App();
app.play();

export default App;
