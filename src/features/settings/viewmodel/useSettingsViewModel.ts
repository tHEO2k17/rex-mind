"use client"

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchSettings, updateSettings } from '../model/settingsSlice';
import { SettingsData } from '../model/types';

export const useSettingsViewModel = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  useEffect(() => {
    if (!settings.data && !settings.isLoading) {
      dispatch(fetchSettings());
    }
  }, [dispatch, settings.data, settings.isLoading]);

  const saveSettings = (newData: Partial<SettingsData>) => {
    dispatch(updateSettings(newData));
  };

  return {
    ...settings,
    saveSettings,
  };
};
