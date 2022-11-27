const answerBridgeMaker = {
  makeAnswerBridge(length) {
    const bridgeShape = [];
    for (let count = 0; count < length; count++) {
      let zeroOrOne = Math.random() >= 0.5 ? 1 : 0
      bridgeShape.push(zeroOrOne);
    }
    return bridgeShape;
  },
};

export default answerBridgeMaker;