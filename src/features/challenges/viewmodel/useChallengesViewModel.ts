import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchChallengesData, seedChallengesData } from '../model/challengesSlice';

export const useChallengesViewModel = (initialData?: any) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.challenges);

  useEffect(() => {
    if (initialData && !data) {
      dispatch(seedChallengesData(initialData));
    } else if (!data && !isLoading) {
      dispatch(fetchChallengesData());
    }
  }, [dispatch, data, isLoading, initialData]);

  return { data, isLoading, error };
};
