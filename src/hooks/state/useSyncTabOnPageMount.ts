import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';
import { selectedTabState } from '@states/selectedTabState';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const useSyncTabOnPageMount = () => {
  const [tabIdx, setTabIdx] = useRecoilState(selectedTabState);
  const navigate = useNavigate();

  useMount(() => {
    setTabIdx(tabIdx);
  });

  useEffect(() => {
    navigate(tabIdx === 0 ? '/browse' : '/favorites');
  }, [tabIdx]);
};
