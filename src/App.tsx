import '@/App.css';
import GlobalErrorFallback from "@/components/custom/fallbacks/global-error-fallback";
import GlobalSuspenseFallback from "@/components/custom/fallbacks/global-suspense-fallback";
import { Toaster } from "@/components/ui/toaster";
import AppRoutes from "@/routes/app-routes";
import { queryClient } from "@/shared/config/react-query.config";
import { QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from "react-router-dom";
import AuthContainer from 'src/client/shared-views/auth-container/auth-container.view';

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
                <AuthContainer>
                  <AppRoutes />
                  <Toaster />
                </AuthContainer>
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}

export default App
