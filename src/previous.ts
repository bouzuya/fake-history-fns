import { previousItem } from './_/previous-item';
import { History } from './types';

const previous = (history: History): string | null => {
  const item = previousItem(history);
  return item === null ? null : item.url;
};

export { previous };
