# RexMind — AI-Powered Human Potential OS

RexMind is a professional, high-performance cognitive growth platform built with Next.js 14 (App Router), Redux Toolkit, and Radix UI. It utilizes AI-driven insights to help users identify their talents, align with their ideal identity, and overcome growth plateaus.

## 🚀 Vision
To provide a "Human Potential Operating System" that translates raw behavioral data into actionable cognitive growth strategies.

## 🛠 Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) (with hydration from RSC)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Client**: [Axios](https://axios-http.com/) with Typed Interceptors
- **Documentation**: [Markdown](https://daringfireball.net/projects/markdown/)

## 📂 Project Structure
The project follows a **Feature-Sliced Design (Modified)** architecture for maximum scalability:
- `app/`: Next.js App Router routes and page definitions.
- `src/features/`: Domain-specific logic (Services, ViewModels, Views, Components).
- `src/shared/`: Reusable UI components, hooks, store configuration, and API clients.
- `src/config/`: Environment and global configuration.
- `docs/`: Comprehensive technical and product documentation.

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:tHEO2k17/rex-mind.git
   cd rex-mind/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the mock backend (json-server):
   ```bash
   npm run mock-backend
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📖 Documentation
Detailed documentation is available in the `docs/` directory:
- [Product Requirements (PRD)](./docs/PRD.md)
- [Technical Design (TDD)](./docs/architecture.md)
- [System Design](./docs/system-design.md)
- [Feature Specifications](./docs/features/)

## 🤝 Contributing
Please ensure all contributions are type-safe (`tsc --noEmit`) and pass linting (`npm run lint`).
