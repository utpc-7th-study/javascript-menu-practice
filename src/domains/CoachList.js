import paramType from '../lib/src/paramType.js';
import { CoachNamesInputError } from '../errors/UserInputErros.js';
import AppError from '../errors/AppError.js';

const SPERATE_CHAR = ',';
const ASK_ALL_DONE = 0;
const START_COACH_TURN_IDX = 0;

export default class CoachList {
  #coachNames;
  #coachesState;
  #currentCoachTurnIdx;

  constructor(coachNames, _ = paramType(coachNames, 'string')) {
    this.#validate(coachNames);
    this.#coachesState = this.#initialCoachesState(coachNames);
    this.#currentCoachTurnIdx = START_COACH_TURN_IDX;
  }

  remainingNotAskCoach() {
    const MAX_ASK_TURN = Object.keys(this.#coachesState).length;

    return this.#checkCoachCount !== MAX_ASK_TURN;
  }

  getCurrentTunrCoach() {
    if (this.#checkCoachCount === ASK_ALL_DONE) {
      throw new AppError('모든 코치에게 물어보았습니다.');
    }

    const coachNames = Object.keys(this.#coachesState);
    const result = coachNames[this.#currentCoachTurnIdx];

    return result;
  }

  proceedNextTurn() {
    this.#currentCoachTurnIdx += 1;
  }

  // eslint-disable-next-line max-lines-per-function -- for paramType
  setNotEatMenuOfCoach(
    { coachName, notEatMenu },
    _0 = paramType(coachName, 'string'),
    _1 = paramType(notEatMenu, Array),
  ) {
    if (!this.#coachesState[coachName]) {
      throw new AppError('존재하지 않는 코치입니다.');
    }

    this.#coachesState[coachName] = {
      ...this.#coachesState[coachName],
      notEatMenu,
    };
  }

  #initialCoachesState(coachNames, _ = paramType(coachNames, 'string')) {
    const coaches = coachNames.split(SPERATE_CHAR);

    return coaches.reduce((acc, name) => {
      return { ...acc, [name]: { notEatMenu: '' } };
    }, {});
  }

  #validate(coachNames, _ = paramType(coachNames, 'string')) {
    this.#checkSpacing(coachNames);
    this.#checkCoachCount(coachNames);
    this.#checkCoachNameLength(coachNames);
  }

  #checkSpacing(coachNames) {
    const spacingRegExp = /\s/;
    if (spacingRegExp.test(coachNames)) {
      throw new Error('코치 이름에는 공백이 들어갈 수 없습니다.');
    }
  }

  #checkCoachCount(coachNames) {
    const splitedCoachNames = coachNames.split(SPERATE_CHAR);

    if (splitedCoachNames.length < 2 || splitedCoachNames.length > 5) {
      throw new CoachNamesInputError('코치는 최소 2명 이상 입력해야 합니다.');
    }
  }

  #checkCoachNameLength(coachNames) {
    const splitedCoachNames = coachNames.split(SPERATE_CHAR);

    if (splitedCoachNames.some((name) => name.length < 2 || name.length > 4)) {
      throw new CoachNamesInputError(
        '코치 이름은 2~4글자 사이로 입력해주세요.',
      );
    }
  }
}
