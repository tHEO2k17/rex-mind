import { apiClient } from '@/shared/api/axios';
import { Talent, Insight } from '../model/types';
import { IdentityData } from '@/features/identity/model/types';

export const dashboardService = {
  getTalents: async (): Promise<Talent[]> => {
    const response = await apiClient.get('/talents');
    return response.data;
  },
  getInsights: async (): Promise<Insight[]> => {
    const response = await apiClient.get('/insights');
    return response.data;
  },
  getIdentity: async (): Promise<IdentityData> => {
    const response = await apiClient.get('/identity');
    return response.data;
  }
};
