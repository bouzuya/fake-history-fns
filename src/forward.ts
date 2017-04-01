import { History } from './types';

const forward = ({ items, index }: History): History => {
  if (items.length > 0 && index < items.length - 1) {
    return { items, index: index + 1 };
  }
  return { items, index };
};

export { forward };
