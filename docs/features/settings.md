# Settings Feature — Product & Technical Specification

## 1. Description
Allows users to manage their account, notifications, and privacy preferences.

## 2. Sections
- **Profile**: Name, email, timezone, and avatar management.
- **Notifications**: Control over email, push, and digest preferences.
- **Privacy**: Visibility settings for community circles and AI data usage.
- **Account**: Subscription and billing status.

## 3. Data Flow
1. **Source**: `settings.service.ts` -> `/settings`
2. **ViewModel**: `useSettingsViewModel.ts`
3. **View**: `SettingsView.tsx`

## 4. State Management
- Settings updates are optimistically applied to the dashboard via the `saveSettings` action in the `settingsSlice`.
