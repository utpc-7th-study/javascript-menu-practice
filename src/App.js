import Controller from './domains/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    const coaches = await this.controller.readCoachNames();
    coaches.forEach((coach) => {
      const hateMenu = this.controller.readHateMenus(coach);
    });
  }
}

export default App;
