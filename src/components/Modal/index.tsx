import { useEffect, useReducer, useState } from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { favoriteItemsState } from '@states/favoriteItemsState';
import { searchedListState } from '@states/searchedListState';
import styles from './ItemModal.module.scss';

export default function Modal({
  item,
  setItem,
  isFavorite,
  toggleIsFavorite,
  setModal,
  isReversed = true,
}: ModalProps) {
  const setFavoriteItems = useSetRecoilState(favoriteItemsState);
  const [searchedList, setSearchedList] = useRecoilState(searchedListState);

  const favoriteItems = useRecoilValue(favoriteItemsState);

  const handleClickAddButton = () => {
    const updated = { ...item, isFavorite: true };
    setSearchedList((prev) => {
      if (typeof prev === 'string') return prev;
      return prev.map((_item) => (_item.id === item.id ? updated : _item));
    });

    if (isFavorite) {
      setFavoriteItems((prev) => prev.filter((_item) => _item.id !== item.id));
    } else {
      setFavoriteItems((prev) => [...prev, updated]);
    }

    toggleIsFavorite();
    setModal(false);
  };

  useEffect(() => {
    console.log(favoriteItems);
  }, [favoriteItems]);

  const handleCancelButton = () => {
    setModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClickAddButton} type="button">
        {isFavorite ? '즐겨찾기 취소' : '즐겨찾기 추가'}
      </button>
      <button onClick={handleCancelButton} type="button">
        취소
      </button>
    </div>
  );
}

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: Item;
  setItem: React.Dispatch<React.SetStateAction<Item>>;
  isReversed?: boolean;
  isFavorite: boolean;
  toggleIsFavorite: React.DispatchWithoutAction;
}
