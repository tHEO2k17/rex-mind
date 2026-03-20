import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchCommunityData, seedCommunityData } from '../model/communitySlice';

export const useCommunityViewModel = (initialData?: any) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.community);

  useEffect(() => {
    if (initialData && !data) {
      dispatch(seedCommunityData(initialData));
    } else if (!data && !isLoading) {
      dispatch(fetchCommunityData());
    }
  }, [dispatch, data, isLoading, initialData]);

  return { data, isLoading, error };
};
