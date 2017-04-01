import { nextItem } from './_/next-item';
import { History } from './types';

const nextState = (history: History): any | null => {
  const item = nextItem(history);
  return item === null ? null : item.data;
};

export { nextState };
