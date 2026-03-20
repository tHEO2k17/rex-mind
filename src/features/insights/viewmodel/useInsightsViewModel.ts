import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchInsightsData, seedInsightsData } from '../model/insightsSlice';

export const useInsightsViewModel = (initialData?: any) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.insights);

  useEffect(() => {
    if (initialData && !data) {
      dispatch(seedInsightsData(initialData));
    } else if (!data && !isLoading) {
      dispatch(fetchInsightsData());
    }
  }, [dispatch, data, isLoading, initialData]);

  return { data, isLoading, error };
};
