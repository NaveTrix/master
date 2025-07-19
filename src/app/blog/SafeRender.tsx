import { ReactNode } from "react";

interface SafeRenderProps {
  children: ReactNode;
}

import React from "react";

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.log("Error caught in SafeRender:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-600 text-center py-8">
          Unable to load blog topics.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function SafeRender({ children }: SafeRenderProps) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
