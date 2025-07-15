import { ReactNode } from "react";

interface SafeRenderProps {
  children: ReactNode;
}

export default function SafeRender({ children }: SafeRenderProps) {
  // Use a class component for error boundaries
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
    componentDidCatch(error: any, info: any) {
      // Optionally log error
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
  // @ts-ignore: React 18+ supports class components in client components
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
