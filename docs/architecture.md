# Technical Design Document (TDD) — RexMind Architecture

## 1. Architectural Overview
RexMind uses a **Hybrid Rendering Strategy** with Next.js 14, combining the speed of Server Components with the interactivity of Client Components.

## 2. Data Flow
1. **Server-Side Fetching**: Page components (RSC) fetch initial data from the API.
2. **Hydration**: Data is passed to the `StoreProvider`, which populates the Redux store on mount.
3. **Client-Side SWR**: Features use custom ViewModels to manage local state and trigger re-fetches when necessary.

## 3. State Management
- **Redux Toolkit**: Used for global cross-cutting concerns (Auth, Identity, Notifications).
- **React State**: Used for local component concerns (Forms, UI toggles).
- **Cookies**: Used for persisting auth tokens and session data for RSC accessibility.

## 4. API Layer
- **Axios Instance**: Configured in `src/shared/api/axios.ts`.
- **Interceptors**: Handle automatic token injection and global error handling with type-safety.
- **Service Pattern**: Features define typed services (e.g., `challenges.service.ts`) to encapsulate fetch logic.

## 5. Loading Strategy (Universal Skeleton System)
- **Manual Suspense**: Routes are wrapped in `Suspense` with fallbacks.
- **Colocated Skeletons**: Each feature (e.g., `InsightsView`) includes its own `Skeleton` component to preserve layout stability.
- **Shared Components**: `SkeletonCard` and `SkeletonHeader` provide a unified design language.

## 6. Security
- **Zod Validation**: (Planned) For runtime type-checking of API responses.
- **HttpOnly Cookies**: For secure token storage.
- **Strict TypeScript**: 100% `noEmit` compliance for compile-time safety.
