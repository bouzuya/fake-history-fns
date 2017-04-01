import { History } from './types';

const pushState = (
  { items, index }: History,
  data: any,
  title: string,
  url?: string | null
): History => {
  // window.location.href & relative url are not supported.
  const u = typeof url === 'undefined' || url === null ? null : url;
  const newIndex = index + 1;
  const newItems =
    items.slice(0, newIndex).concat([{ data, title, url: u }]);
  return {
    index: newIndex,
    items: newItems
  };
};

export { pushState };
