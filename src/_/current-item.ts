import { History, Item } from '../types';

const currentItem = ({ items, index }: History): Item | null => {
  if (items.length === 0) { return null; }
  return items[index];
};

export { currentItem };
