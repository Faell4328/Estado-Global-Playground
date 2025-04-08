import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';

import TimerProvider from './contexts/timer.tsx';
import { router } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <TimerProvider>
    <RouterProvider router={ router } />
  </TimerProvider>
)
