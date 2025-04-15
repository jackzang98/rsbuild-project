import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from '../components/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
