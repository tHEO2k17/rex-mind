import { apiClient } from '@/shared/api/axios';
import { MentorData } from '../model/types';

export const mentorService = {
  getMentor: async (): Promise<MentorData> => {
    const response = await apiClient.get('/mentor');
    return response.data;
  },
  sendMessage: async (content: string): Promise<string> => {
    // In a real app, this would be a POST to an AI endpoint
    // For now, we'll mock a delay and a response
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `This is a mock AI response to: "${content}". I'm here to help you optimize your potential!`;
  }
};
