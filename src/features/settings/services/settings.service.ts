import { apiClient } from '@/shared/api/axios';
import { SettingsData } from '../model/types';

export const settingsService = {
  getSettings: async (): Promise<SettingsData> => {
    const response = await apiClient.get('/settings');
    return response.data;
  },
  updateSettings: async (data: Partial<SettingsData>): Promise<SettingsData> => {
    const response = await apiClient.patch('/settings', data);
    return response.data;
  }
};
