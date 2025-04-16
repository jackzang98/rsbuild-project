import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from '../components/error-page';
import Contact from './contact';
import type { Contact as ContactType } from './contact';
import { sleep } from '@/utils/sleep';

async function userLoader() {
  await sleep(10);
  const data: ContactType[] = [
    {
      first: 'Your',
      last: 'Name',
      avatar: 'https://robohash.org/you.png?size=200x200',
      twitter: 'your_handle',
      notes: 'Some notes',
      favorite: true,
      id: '1',
    },
  ];
  return data;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // a "loader" function to provide data to the route element before it renders
    loader: userLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
