# Identity Feature — Product & Technical Specification

## 1. Description
The Identity Builder is the heart of RexMind. It allows users to design their "Future Self" by selecting traits, writing vision statements, and tracking goal alignment.

## 2. Key UI Components
- **Vision Statement Editor**: Rich text input for defining long-term purpose.
- **Trait Cloud**: Visual representation of current and target personality traits.
- **Alignment Gauge**: Mathematical measure of how close your daily actions are to your vision.

## 3. Data Flow
1. **Source**: `identity.service.ts` -> `/identity`
2. **ViewModel**: `useIdentityViewModel.ts`
3. **View**: `IdentityView.tsx`

## 4. State Management
- **identitySlice**: Persists the user's focus and core metrics in Redux for cross-dashboard usage.
