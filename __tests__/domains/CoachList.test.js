import CoachList from '../../src/domains/CoachList';

describe('생성자로 받는 코치들의 이름 예외처리 테스트', () => {
  test('공백이 있을때 예외가 발생해야 한다', () => {
    // given
    const coachNames = '토미,제임스, 포코';

    // when
    // then
    expect(() => {
      new CoachList(coachNames);
    }).toThrow();
  });

  test.each(['토미', '토미,제임스,포코,주디,하몽,주디'])(
    '코치들의 인원이 범위를 벗어날때 예외가 발생해야한다',
    (coaches) => {
      // given
      const coachNames = coaches;

      // when
      // then
      expect(() => {
        new CoachList(coachNames);
      }).toThrow();
    },
  );

  test('코치의 이름중에 글자수가 범위가 벗어났을때 예외가 발생해야 한다.', () => {
    // given
    const coachNames = '토미,제임스제임스제임스,포코';

    // when
    // then
    expect(() => {
      new CoachList(coachNames);
    }).toThrow();
  });
});
