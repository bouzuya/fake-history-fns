import { currentItem } from './_/current-item';
import { History } from './types';

const state = (history: History): any => {
  const item = currentItem(history);
  return item === null ? null : item.data;
};

export { state };
