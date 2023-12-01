import Coach from '../../src/domain/coach';

describe('코치 이름 입력 값 예외 테스트', () => {
  it.each(['abc', '한', '다섯글자이상'])('잘못된 이름을 입력하면 예외가 발생한다', (name) => {
    // when, then
    expect(() => new Coach(name)).toThrow();
  });

  it.each(['이상한음식', '과자'])('잘못된 음식 입력하면 예외가 발생한다', (food) => {
    // when
    const coach = new Coach('포비');

    // then
    expect(() => coach.addCannotEatFood(food)).toThrow();
  });
});
