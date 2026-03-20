# Dashboard Feature — Product & Technical Specification

## 1. Description
The main Dashboard serves as the "Command Center" for the user's growth system. It surface the most critical data from all other features for an immediate pulse check.

## 2. Key UI Components
- **Identity Alignment**: Visual representation of how "on track" the user is.
- **AI Pulse Insights**: The most recent/critical pattern detected by the AI.
- **Daily Focus**: A high-priority checklist of cognitive tasks for the day.
- **Talent Signals**: Real-time confidence scores for active talents.

## 3. Data Flow
1. **Source**: Aggregated from `dashboard.service.ts` (Multiple endpoints).
2. **ViewModel**: `useDashboardViewModel.ts`
3. **View**: `DashboardView.tsx`

## 4. Server-Side Rendering (SSR)
- The dashboard uses RSC to pre-fetch values for alignment and focus to ensure a zero-flicker initial load.
