const ERROR_PREFIX = '[ERROR]';

export const MIN = Object.freeze({
  COACH: 2,
  COACH_NAME_LENGTH: 2,
  RANDOM_NUM: 1,
});

export const MAX = Object.freeze({
  COACH: 5,
  COACH_NAME_LENGTH: 4,
  CANNOT_EAT_MENU: 2,
  RANDOM_NUM: 5,
});

export const MESSAGE = Object.freeze({
  GREETING: '점심 메뉴 추천을 시작합니다.',
  RESULT: '메뉴 추천 결과입니다.',
  COMPLETE: '추천을 완료했습니다.',
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_COACH_RANGE: `${ERROR_PREFIX} 코치는 ${MIN.COACH}명 이상, ${MAX.COACH}명 이하로 입력해야 합니다.`,
  INVALID_NAME_LENGTH: `${ERROR_PREFIX} 코치의 이름은 최소 ${MIN.COACH_NAME_LENGTH}글자, 최대 ${MAX.COACH_NAME_LENGTH}글자 입니다.`,
  NOT_KOREAN: `${ERROR_PREFIX} 입력 값이 한글이 아닙니다. 한글로 입력해주세요.`,
  OVER_CANNOT_EAT_MENU: `${ERROR_PREFIX} 못 먹는 메뉴는 ${MAX.CANNOT_EAT_MENU}개 까지 입력 가능합니다.`,
  INVALID_MENU: `${ERROR_PREFIX} 올바르지 않은 메뉴입니다. 다시 입력해주세요.`,
});

export const PROMPT_MESSAGE = Object.freeze({
  ENTER_NAMES: '코치의 이름을 입력해 주세요. (, 로 구분)',
  CANNOT_EAT_MENU: '(이)가 못 먹는 메뉴를 입력해 주세요.',
});
