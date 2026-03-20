# Product Requirements Document (PRD) — RexMind

## 1. Executive Summary
RexMind is an AI-powered dashboard designed to quantify and accelerate human potential. It acts as a cognitive mirror, showing users their hidden strengths and providing a structured path to their "Future Self."

## 2. Target Audience
- **Growth-Minded Professionals**: Individuals seeking to optimize their cognitive output.
- **Students & Lifelong Learners**: Users looking to identify and bridge talent gaps.
- **High-Performance Athletes/Teams**: People requiring accountability and data-backed growth loops.

## 3. Core Features & User Stories

### 3.1. Identity Builder
- **Vision**: Define the "Future Self" through traits and vision statements.
- **User Story**: "As a user, I want to define my ideal identity so that I have a clear targets for my daily actions."

### 3.2. Talent Discovery
- **Vision**: Quantify innate abilities using AI pattern detection.
- **User Story**: "As a user, I want to see my high-confidence talents so that I can double down on my natural advantages."

### 3.3. AI Mentor
- **Vision**: Real-time growth coaching with context from user data.
- **User Story**: "As a user, I want to chat with an AI that knows my goals and can help me reframe challenges."

### 3.4. Community Circles
- **Vision**: Peer-to-peer accountability and support.
- **User Story**: "As a user, I want to join circles of like-minded people so that we can grow together."

## 4. Technical Constraints
- **Performance**: Initial page load must be < 200ms (achieved via RSC).
- **Latency**: UI updates must feel instantaneous (achieved via Redux + Optimistic updates).
- **Security**: User data must be protected with typed API layers and secure cookie handling.

## 5. Success Metrics
- **Alignment Score**: Average user identity alignment increase over 30 days.
- **Retention**: Daily active use of the Focus and Pulse systems.
- **Growth Conversion**: Completion rate of Growth Challenges.
