import '@/assets/cssReset.css';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './AppRouter';

const App: FC = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
