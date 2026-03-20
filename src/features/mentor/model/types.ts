export interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface HistoryItem {
  title: string;
  date: string;
}

export interface MentorData {
  messages: Message[];
  history: HistoryItem[];
}

export interface MentorState {
  data: MentorData | null;
  isLoading: boolean;
  error: string | null;
}
