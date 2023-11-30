import paramType from '../lib/src/paramType.js';
import OutputView from '../view/OutputView.js';

const createErrorHandler = (operator, _ = paramType(operator, Map)) => {
  return (error) => {
    const errorAction = operator.get(error.constructor);

    if (!errorAction) throw error;

    OutputView.printError(error.message);

    return errorAction();
  };
};

export default createErrorHandler;
