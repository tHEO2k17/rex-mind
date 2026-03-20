export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  timezone: string;
}

export interface NotificationSettings {
  dailyInsights: boolean;
  challengeReminders: boolean;
  communityUpdates: boolean;
  weeklySummary: boolean;
  marketingEmails: boolean;
}

export interface PrivacySettings {
  publicProfile: boolean;
  showProgress: boolean;
  aiLearning: boolean;
}

export interface SettingsData {
  profile: UserProfile;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}

export interface SettingsState {
  data: SettingsData | null;
  isLoading: boolean;
  error: string | null;
}
