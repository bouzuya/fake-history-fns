import { History, Item } from '../types';

const previousItem = ({ items, index }: History): Item | null => {
  if (items.length === 0) { return null; }
  if (index - 1 < 0) { return null; }
  return items[index - 1];
};

export { previousItem };
