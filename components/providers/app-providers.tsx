"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-right" toastOptions={{ style: { background: "#0f172a", color: "#fff" } }} />
    </>
  );
}
