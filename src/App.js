import Validator from './validator/validator.js';
import Controller from './controller/Controller.js';
class App {
  play() {
    const controller = new Controller(new Validator());
    controller.startRecommand();
  }
}

const aa = new App();
aa.play();
export default App;
