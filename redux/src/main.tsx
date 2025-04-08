import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';

import { router } from './App.tsx'
import { store } from './redux/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={ router } />
  </Provider>
)
