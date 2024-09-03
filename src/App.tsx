import '@/App.css';
import GlobalSuspenseFallback from "@/components/custom/fallbacks/global-suspense-fallback";
import GlobalErrorFallback from "@/components/custom/fallbacks/global-error-fallback";
import AppRoutes from "@/routes/app-routes";
import { queryClient } from "@/shared/config/react-query";
import { QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={GlobalErrorFallback}
            onReset={reset}
          >
            <Suspense fallback={<GlobalSuspenseFallback />}>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}

export default App
