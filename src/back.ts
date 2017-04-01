import { History } from './types';

const back = ({ items, index }: History): History => {
  if (items.length > 0 && index > 0) {
    return { items, index: index - 1 };
  }
  return { items, index };
};

export { back };
