import { apiClient } from '@/shared/api/axios';
import { IdentityData } from '../model/types';

export const identityService = {
  getIdentity: async (): Promise<IdentityData> => {
    const response = await apiClient.get('/identity');
    return response.data;
  },
  updateIdentity: async (data: Partial<IdentityData>): Promise<IdentityData> => {
    const response = await apiClient.patch('/identity', data);
    return response.data;
  }
};
