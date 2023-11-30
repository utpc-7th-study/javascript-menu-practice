export class UserInputError {
  #TEMPLETE = '[ERROR]';

  constructor(message) {
    this.message = `${this.#TEMPLETE} ${message}`;
  }
}

export class CoachNamesInputError extends UserInputError {}
export class NotEatMenuInputError extends UserInputError {}
