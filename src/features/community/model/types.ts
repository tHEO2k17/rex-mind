export interface Circle {
  name: string;
  focus: string;
  members: number;
  recentTopic?: string;
  activity?: string;
  isActive?: boolean;
  description?: string;
}

export interface Discussion {
  circle: string;
  author: string;
  topic: string;
  replies: number;
  time: string;
}

export interface CommunityData {
  myCircles: Circle[];
  discoverCircles: Circle[];
  recentDiscussions: Discussion[];
}

export interface CommunityState {
  data: CommunityData | null;
  isLoading: boolean;
  error: string | null;
}
