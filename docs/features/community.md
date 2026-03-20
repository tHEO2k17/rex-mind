# Community Feature — Product & Technical Specification

## 1. Description
Community Circles allow users to join accountability groups focused on specific growth areas. Peer support and discussion are the core value drivers.

## 2. Key UI Components
- **Circle Cards**: Display members, active status, and the most recent discussion topic.
- **Discussion List**: Real-time activity feed of circle conversations.
- **Circle Discovery**: Search and join interface for new communities.

## 3. Data Flow
1. **Source**: `community.service.ts` -> `/community`
2. **ViewModel**: `useCommunityViewModel.ts`
3. **View**: `CommunityView.tsx`

## 4. Features
- **Circle Creation**: Users can define their own groups and focus areas.
- **Discussion Threads**: Nested messaging for growth accountability.
- **Member Directory**: See who else is part of your growth ecosystem.
