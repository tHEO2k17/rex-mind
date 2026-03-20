import { apiClient } from '@/shared/api/axios';
import { CommunityData } from '../model/types';

export const communityService = {
  getCommunity: async (): Promise<CommunityData> => {
    const response = await apiClient.get('/community');
    return response.data;
  }
};
