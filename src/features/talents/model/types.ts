export interface DetailedTalent {
  id: number;
  name: string;
  confidence: number;
  description: string;
  developmentPath: string[];
  status: 'high' | 'medium' | 'developing';
}

export interface TalentsState {
  talents: DetailedTalent[];
  isLoading: boolean;
  error: string | null;
}
