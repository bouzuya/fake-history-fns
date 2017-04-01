import { currentItem } from './_/current-item';
import { History } from './types';

const currentState = (history: History): any | null => {
  const item = currentItem(history);
  return item === null ? null : item.data;
};

export { currentState };
