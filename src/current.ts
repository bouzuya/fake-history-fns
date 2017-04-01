import { currentItem } from './_/current-item';
import { History } from './types';

const current = (history: History): string | null => {
  const item = currentItem(history);
  return item === null ? null : item.url;
};

export { current };
