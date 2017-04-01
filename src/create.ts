import { History } from './types';

const create = (): History => {
  return { items: [], index: -1 };
};

export { create };
