const isKorean = (string) => /^[가-힣]+$/g.test(string);

export default isKorean;