import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchTalents } from '../model/talentsSlice';

export const useTalentsViewModel = () => {
  const dispatch = useAppDispatch();
  const { talents, isLoading, error } = useAppSelector((state) => state.talents);

  useEffect(() => {
    if (talents.length === 0 && !isLoading) {
      dispatch(fetchTalents());
    }
  }, [dispatch, talents.length, isLoading]);

  return { talents, isLoading, error };
};
