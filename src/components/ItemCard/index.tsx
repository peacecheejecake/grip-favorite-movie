import { useState, useReducer } from 'react';
import cx from 'classnames';
import { favoriteItemsState } from '@states/favoriteItemsState';
import { searchedListState } from '@states/searchedListState';
import { useRecoilValue } from 'recoil';
import styles from './ItemCard.module.scss';
import Modal from '../Modal';

export default function ItemCard({ item, onFavorites = false }: ItemCardProps) {
  const [modal, setModal] = useState(false);
  const [cardItem, setCardItem] = useState<Item>({ ...item });
  const [isFavorite, toggleIsFavorite] = useReducer((prev) => !prev, item.isFavorite);
  const favoriteItems = useRecoilValue(favoriteItemsState);

  const handleImgSrcError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = '';
  };

  const handleClick = () => {
    if (!modal) setModal(true);
  };

  return (
    <section
      className={cx([styles.wrapper, { [styles.favorite]: isFavorite }])}
      onClick={handleClick}
      role="tab"
      tabIndex={0}
    >
      <img className={styles.poster} src={item.posterURL} onError={handleImgSrcError} alt={item.title} />
      <div className={styles.description}>
        <h1>{item.title}</h1>
        <p>{`${item.year} · ${item.type}`}</p>
      </div>
      {modal && (
        <Modal
          item={cardItem}
          setItem={setCardItem}
          isFavorite={isFavorite}
          toggleIsFavorite={toggleIsFavorite}
          setModal={setModal}
          isReversed={onFavorites}
        />
      )}
    </section>
  );
}

interface ItemCardProps {
  item: Item;
  onFavorites?: boolean;
}
