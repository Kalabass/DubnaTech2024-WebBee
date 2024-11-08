import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../const/routes';
import AdminPage from '../pages/AdminPage';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';

export const AppRouter = createBrowserRouter([
  {
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTES.ADMIN,
        element: <AdminPage />,
      },
    ],
  },
]);
