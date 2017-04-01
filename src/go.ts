import { History } from './types';

const go = ({ items, index }: History, delta?: number): History => {
  if (typeof delta === 'undefined') { return { items, index }; }
  if (items.length === 0) { return { items, index }; }
  const newIndex = index + delta;
  if (newIndex < 0 || items.length <= newIndex) {
    return { items, index };
  }
  return { items, index: newIndex };
};

export { go };
