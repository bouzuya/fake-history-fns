import { History, Item } from '../types';

const nextItem = ({ items, index }: History): Item | null => {
  if (items.length === 0) { return null; }
  if (index + 1 >= items.length) { return null; }
  return items[index + 1];
};

export { nextItem };
