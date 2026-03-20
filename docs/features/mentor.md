# AI Mentor Feature — Product & Technical Specification

## 1. Description
The AI Mentor is a contextual chat interface that provides growth guidance. It uses the user's identity, talents, and history to provide personalized advice.

## 2. Key UI Components
- **Chat Feed**: Optimized messaging interface with role-based styling.
- **History Sidebar**: List of past conversations for easy recall.
- **Contextual Suggestions**: AI-generated prompts based on current progress.

## 3. Data Flow
1. **Source**: `mentor.service.ts` -> `/mentor`
2. **ViewModel**: `useMentorViewModel.ts`
3. **View**: `MentorView.tsx`

### 3.1 Chat Interaction Sequence
```mermaid
sequenceDiagram
    participant U as User
    participant VM as MentorViewModel
    participant S as MentorService
    participant AI as AI Engine (Mock)

    U->>VM: sendMessage("How do I stay focused?")
    VM->>VM: Add user message to UI state
    VM->>S: sendMessage(text, context)
    S->>AI: POST /mentor (with identity context)
    AI-->>S: Response("Start with 25m Pomodoro...")
    S-->>VM: AI Content
    VM->>VM: Append AI response to UI state
```

## 4. Features
- **Context-Awareness**: The mentor "remembers" your identity traits and vision.
- **Real-Time Integration**: Seamless streaming of AI responses.
- **History Management**: Browse and resume any previous growth discussion.
