import { nextItem } from './_/next-item';
import { History } from './types';

const next = (history: History): string | null => {
  const item = nextItem(history);
  return item === null ? null : item.url;
};

export { next };
