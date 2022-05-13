import { Routes, Route, Navigate } from 'react-router-dom';
import TabBar from '@components/TabBar';
import styles from './Routes.module.scss';
import Browse from './Browse';
import Favorites from './Favorites';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Routes>
          <Route index element={<Navigate to="browse" replace />} />
          <Route path="browse" element={<Browse />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>
      <TabBar />
    </div>
  );
}
