import { atom } from 'recoil';

export const favoriteItemsState = atom<Item[]>({
  key: '#favoriteItemsState',
  default: [],
});
