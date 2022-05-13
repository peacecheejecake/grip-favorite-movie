import cx from 'classnames';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabBar from '@components/TabBar';
import { useDarkModeState, useSyncTabOnPageMount } from '@hooks/state';
import { useEffect } from 'react';
import styles from './Routes.module.scss';
import Browse from './Browse';
import Favorites from './Favorites';

export default function App() {
  const { modeNameRef, setIsDark } = useDarkModeState();
  useSyncTabOnPageMount();

  useEffect(() => {
    setIsDark(false);
  });

  return (
    <div className={styles.wrapper}>
      <div className={cx([styles.app, styles[modeNameRef.current]])}>
        <Routes>
          <Route index element={<Navigate to="browse" replace />} />
          <Route path="browse" element={<Browse />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
        <TabBar />
      </div>
    </div>
  );
}
