import { useSearchQuery } from '@hooks/useSearchQuery';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchedListState } from '@states/searchedListState';
import { favoriteItemsState } from '@states/favoriteItemsState';
import styles from './ItemList.module.scss';
import ItemCard from '../ItemCard';

export default function ItemList({ keyword, page }: ItemListProps) {
  const { isLoading, data, isError } = useSearchQuery(keyword, page);
  const [lastResult, setLastResult] = useRecoilState(searchedListState);

  useEffect(() => {
    console.log(data);
    if (data?.data) {
      setLastResult(data.data);
    } else if (data?.error) {
      setLastResult(data.error);
    }
  }, [data]);

  if (isLoading) return <span>로딩중...</span>;

  if (lastResult === 'Movie not found!' || !lastResult?.length) {
    return <span>검색 결과가 없습니다.</span>;
  }

  if (lastResult === 'Too many results.') {
    return (
      <>
        <p>검색된 결과가 너무 많아요.</p>
        <p>조금 더 자세히 입력해주세요.</p>
      </>
    );
  }

  if (isError || lastResult instanceof String) return <span>알 수 없는 에러가 발생했어요.</span>;

  return (
    <main className={styles.wrapper}>
      {(lastResult as Item[]).map((item: Item) => (
        <ItemCard item={item} key={`item-${page}-${item.id}`} />
      ))}
    </main>
  );
}

interface ItemListProps {
  keyword: string;
  page: number;
}
