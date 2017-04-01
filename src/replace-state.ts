import { pushState } from './push-state';
import { History } from './types';

const replaceState = (
    { items, index }: History, data: any, title: string, url?: string | null
): History => {
if (items.length === 0) {
    return pushState({ items, index }, data, title, url);
}
// window.location.href & relative url are not supported.
const u = typeof url === 'undefined' || url === null ? null : url;
const newItems =
    items.slice(0, index).concat([{ data, title, url: u }]);
return {
    index,
    items: newItems
};
};

export { replaceState };
