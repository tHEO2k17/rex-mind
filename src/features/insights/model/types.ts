export interface InsightPattern {
  type: 'warning' | 'positive' | 'neutral';
  title: string;
  description: string;
  action: string;
  category: string;
}

export interface HabitLoop {
  habit: string;
  trigger: string;
  streak: number;
  status: 'active' | 'building';
}

export interface StressSignal {
  signal: string;
  frequency: string;
  severity: 'low' | 'medium' | 'high';
}

export interface ProductivityStat {
  label: string;
  value: string;
  change: string;
}

export interface InsightsData {
  patterns: InsightPattern[];
  habitLoops: HabitLoop[];
  stressSignals: StressSignal[];
  productivityStats: ProductivityStat[];
}

export interface InsightsState {
  data: InsightsData | null;
  isLoading: boolean;
  error: string | null;
}
