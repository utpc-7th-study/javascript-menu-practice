import Controller from './domains/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    const coaches = await this.controller.readCoachNames();
  }
}

export default App;
