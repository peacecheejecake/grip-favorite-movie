import { MouseEventHandler } from 'react';
import styles from './TabBarButton.module.scss';

export default function TabBarButton({ tabIdx, Icon, title, onClick }: TabBarButtonProps) {
  return (
    <button type="button" className={styles.tabBarButton} data-tab-idx={tabIdx} onClick={onClick}>
      <Icon className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </button>
  );
}

type TabBarButtonProps = React.PropsWithChildren<{
  tabIdx: number;
  Icon: SVGFunctionComponent;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;
