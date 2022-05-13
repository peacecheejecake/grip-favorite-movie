import { useEffect, useRef } from 'react';
import { darkModeState } from '@states/darkModeState';
import { useRecoil } from './useRecoil';

const MODE_NAMES = ['light', 'dark'];

export const useDarkModeState = () => {
  const [isDark, setIsDark, resetIsDark] = useRecoil(darkModeState);
  const modeNameRef = useRef(MODE_NAMES[Number(isDark)]);

  useEffect(() => {
    modeNameRef.current = MODE_NAMES[Number(isDark)];
  }, [isDark]);

  return { modeNameRef, isDark, setIsDark, resetIsDark };
};
