const InputView = {
  async readCoaches() {
    const coachNames = await Console.readLineAsync(
      '코치의 이름을 입력해 주세요. (, 로 구분)'
    );

    return coachNames.split(',');
  },
};

export default InputView;
