import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/model/authSlice';
import dashboardReducer from '@/features/dashboard/model/dashboardSlice';
import identityReducer from '@/features/identity/model/identitySlice';
import mentorReducer from '@/features/mentor/model/mentorSlice';
import challengesReducer from '@/features/challenges/model/challengesSlice';
import communityReducer from '@/features/community/model/communitySlice';
import insightsReducer from '@/features/insights/model/insightsSlice';
import talentsReducer from '@/features/talents/model/talentsSlice';
import settingsReducer from '@/features/settings/model/settingsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      dashboard: dashboardReducer,
      identity: identityReducer,
      mentor: mentorReducer,
      challenges: challengesReducer,
      community: communityReducer,
      insights: insightsReducer,
      talents: talentsReducer,
      settings: settingsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
