import { atom } from 'recoil';

export const searchedListState = atom<Item[] | string>({
  key: '#searchedListState',
  default: [],
});
