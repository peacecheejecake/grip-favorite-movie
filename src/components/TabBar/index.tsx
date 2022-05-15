import cx from 'classnames';
import { SearchIcon, StarIcon } from '@assets/svgs';
import { useRecoilState } from 'recoil';
import { selectedTabState } from '@states/selectedTabState';
import TabBarButton from '../TabBarButton';
import styles from './TabBar.module.scss';

export default function TabBar() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { tabIdx } = event.currentTarget.dataset;
    if (tabIdx === undefined) return;
    setSelectedTab(Number(tabIdx));
  };

  return (
    <nav className={cx([styles.wrapper, styles.on])}>
      <TabBarButton tabIdx={0} title="검색" Icon={SearchIcon} onClick={handleButtonClick} />
      <TabBarButton tabIdx={1} title={`즐겨찾기(${'.'})`} Icon={StarIcon} onClick={handleButtonClick} />
      <div className={styles.selectionBox} data-tab-idx={selectedTab} />
    </nav>
  );
}
