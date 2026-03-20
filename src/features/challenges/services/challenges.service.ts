import { apiClient } from '@/shared/api/axios';
import { ChallengesData } from '../model/types';

export const challengesService = {
  getChallenges: async (): Promise<ChallengesData> => {
    const response = await apiClient.get('/challenges');
    return response.data;
  }
};
