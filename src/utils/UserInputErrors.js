import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/paramType/src/paramType.js';
import AppError from './AppError.js';

class UserInputError extends AppError {}
export class VisitDateInputError extends UserInputError {}
export class OrderInputError extends UserInputError {}

// eslint-disable-next-line max-lines-per-function
const createErrorHandler = (
  excuteFunction,
  operation,
  _ = paramType(excuteFunction, Function),
  _1 = paramType(operation, Map),
) => {
  return () => {
    try {
      excuteFunction();
    } catch ({ message }) {
      Console.print(message);
      operation.get(message)();
    }
  };
};
