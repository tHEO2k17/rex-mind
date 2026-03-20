import { apiClient } from '@/shared/api/axios';
import { InsightsData } from '../model/types';

export const insightsService = {
  getInsightsData: async (): Promise<InsightsData> => {
    // In db.json, the data is spread or named differently, but we'll fetch what we need.
    // For now, let's assume we can fetch these from dedicated endpoints or one 'insights' object.
    // Looking at db.json, it has "insights", "habitLoops", "stressSignals", "productivityStats" 
    // are NOT there yet. I should add them to db.json or mock them for now in the service.
    
    // Wait, let's check db.json again.
    // db.json only has "insights" which is a different list.
    // I'll update db.json to include the expected structure for the insights page.
    const response = await apiClient.get('/insights_data');
    return response.data;
  }
};
