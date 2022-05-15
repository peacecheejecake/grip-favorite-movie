import { useState, useEffect, useRef } from 'react';
import ItemList from '@components/ItemList';
import SearchBar from '@components/SearchBar';
import { useSearchQuery } from '@hooks/useSearchQuery';
import styles from './Browse.module.scss';

export default function Browse() {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div className={styles.wrapper}>
      <SearchBar setKeyword={setKeyword} setPage={setPage} />
      <ItemList keyword={keyword} page={page} />
    </div>
  );
}
