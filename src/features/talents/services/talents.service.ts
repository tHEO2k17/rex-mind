import { apiClient } from '@/shared/api/axios';
import { DetailedTalent } from '../model/types';

export const talentsService = {
  getDetailedTalents: async (): Promise<DetailedTalent[]> => {
    const response = await apiClient.get('/detailed_talents');
    return response.data;
  }
};
