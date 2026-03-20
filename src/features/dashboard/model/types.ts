export interface Talent {
  id: number;
  name: string;
  confidence: number;
}
export interface Insight {
  id: number;
  title: string;
  description: string;
  recommendation: string;
}
export interface DashboardState {
  talents: Talent[];
  insights: Insight[];
  isLoading: boolean;
  error: string | null;
}
