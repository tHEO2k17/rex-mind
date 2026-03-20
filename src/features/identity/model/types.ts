export interface Goal {
  title: string;
  progress: number;
}
export interface IdentityData {
  identityName: string;
  visionStatement: string;
  traits: string[];
  goals: Goal[];
}
export interface IdentityState {
  data: IdentityData | null;
  isLoading: boolean;
  error: string | null;
}
