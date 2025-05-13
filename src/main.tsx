import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Bounce, ToastContainer } from 'react-toastify';
import App from './App.tsx';
import './index.css';

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClint}>
      <ReactQueryDevtools />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
