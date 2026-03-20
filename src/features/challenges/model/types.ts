export interface Task {
  name: string;
  completed: boolean;
}
export interface Challenge {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  progress?: number;
  total?: number;
  tasks?: Task[];
  benefits?: string[];
  completedDate?: string;
}
export interface ChallengesData {
  active: Challenge[];
  available: Challenge[];
  completed: Challenge[];
}
export interface ChallengesState {
  data: ChallengesData | null;
  isLoading: boolean;
  error: string | null;
}
