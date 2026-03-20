"use client"

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchIdentityData } from '../model/identitySlice';

export const useIdentityViewModel = () => {
  const dispatch = useAppDispatch();
  const identity = useAppSelector((state) => state.identity);

  useEffect(() => {
    if (!identity.data && !identity.isLoading) {
      dispatch(fetchIdentityData());
    }
  }, [dispatch, identity.data, identity.isLoading]);

  return identity;
};
