"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { MessageCircle, Send, Sparkles, Clock, History } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet"
import { useMentorViewModel } from "@/features/mentor/viewmodel/useMentorViewModel"
import { Message, HistoryItem } from "@/features/mentor/model/types"
import { SkeletonCard } from "@/shared/components/dashboard/SkeletonCard"

export function MentorSkeleton() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-4 md:h-[calc(100vh-7rem)] lg:flex-row lg:gap-6">
      <SkeletonCard className="hidden w-72 shrink-0 lg:flex h-full" rows={6} />
      <SkeletonCard className="flex-1 h-full" rows={10} />
    </div>
  )
}

function HistoryList({ history }: { history: HistoryItem[] }) {
  if (!history || history.length === 0) return null;
  return (
    <div className="flex flex-col gap-1">
      {history.map((conv, index) => (
        <button
          key={index}
          className={`w-full rounded-md p-3 text-left transition-colors hover:bg-secondary ${index === 0 ? "bg-secondary" : ""}`}
        >
          <p className="font-medium text-foreground">{conv.title}</p>
          <p className="text-sm text-muted-foreground">{conv.date}</p>
        </button>
      ))}
    </div>
  )
}

export function MentorView({ initialData }: { initialData?: any }) {
  const { data, isLoading, sendNewMessage } = useMentorViewModel();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data?.messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendNewMessage(inputValue);
    setInputValue("");
  };

  if (isLoading && !data && !initialData) {
    return <MentorSkeleton />;
  }

  const activeData = data || initialData;
  if (!activeData) return <MentorSkeleton />;

  const messages = activeData.messages || [];
  const conversationHistory = activeData.history || [];

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-4 md:h-[calc(100vh-7rem)] lg:flex-row lg:gap-6">
      <Card className="hidden w-72 shrink-0 border border-border shadow-sm lg:flex lg:flex-col">
        <CardHeader className="shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <Clock className="h-5 w-5 text-primary-foreground" />
            </div>
            <CardTitle className="text-base font-semibold">History</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4 pt-0">
          <HistoryList history={conversationHistory} />
        </CardContent>
      </Card>

      <Card className="flex min-h-0 flex-1 flex-col border border-border shadow-sm">
        <CardHeader className="shrink-0 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold">AI Mentor</CardTitle>
                <p className="text-sm text-muted-foreground">Your personal growth guide</p>
              </div>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <History className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Conversation History
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-4">
                    <HistoryList history={conversationHistory} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex min-h-0 flex-1 flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {messages.map((message: Message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 sm:max-w-[75%] sm:p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs font-medium">RexMind AI</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                    <p className={`mt-2 text-xs ${message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="shrink-0 border-t border-border p-3 sm:p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask your AI mentor..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button onClick={handleSend} size="icon" className="shrink-0" disabled={!inputValue.trim() || isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 hidden text-xs text-muted-foreground sm:block">
              Your mentor has context from your identity, insights, and growth history.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
