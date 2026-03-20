# Challenges Feature — Product & Technical Specification

## 1. Description
Growth Challenges are structured tasks designed to push users out of their comfort zones and build new skills aligned with their target identity.

## 2. Key UI Components
- **Challenge Progress**: Visual gauge of overall challenge completion.
- **Task List**: List of specific, manageable steps to complete the challenge.
- **Completion Badges**: Gamified rewards for finishing challenges.

## 3. Data Flow
1. **Source**: `challenges.service.ts` -> `/challenges`
2. **ViewModel**: `useChallengesViewModel.ts`
3. **View**: `ChallengesView.tsx`

## 4. Types
- **Mindset**: Challenges focused on reframing and belief systems.
- **Discipline**: Habit-based challenges for consistency.
- **Skill**: Acquisition of new technical or cognitive abilities.
