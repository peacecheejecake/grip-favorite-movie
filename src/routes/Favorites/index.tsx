import { useRecoilState } from 'recoil';
import { favoriteItemsState } from '@states/favoriteItemsState';
import ItemCard from '@components/ItemCard';
import styles from './Favorites.module.scss';

export default function Favorites() {
  const [favoriteItems, setFavoriteItems] = useRecoilState(favoriteItemsState);

  return (
    <div className={styles.wrapper}>
      <h1>Favorites</h1>
      <main className={styles.itemList}>
        {favoriteItems.map((item) => (
          <ItemCard item={item} key={`favorites-${item.id}`} onFavorites />
        ))}
      </main>
    </div>
  );
}
