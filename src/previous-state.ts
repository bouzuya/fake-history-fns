import { previousItem } from './_/previous-item';
import { History } from './types';

const previousState = (history: History): any | null => {
  const item = previousItem(history);
  return item === null ? null : item.data;
};

export { previousState };
