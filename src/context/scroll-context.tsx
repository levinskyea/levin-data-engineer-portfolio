"use client";
import { createContext, useContext, useState, useCallback } from "react";
import type { SectionId } from "@/hooks/use-active-section";

interface ScrollContextValue {
  pendingSection: SectionId | null;
  requestScroll: (id: SectionId) => void;
  clearPending: () => void;
}

const ScrollContext = createContext<ScrollContextValue>({
  pendingSection: null,
  requestScroll: () => {},
  clearPending: () => {}
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [pendingSection, setPendingSection] = useState<SectionId | null>(null);
  const requestScroll = useCallback((id: SectionId) => setPendingSection(id), []);
  const clearPending = useCallback(() => setPendingSection(null), []);

  return (
    <ScrollContext.Provider value={{ pendingSection, requestScroll, clearPending }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}
