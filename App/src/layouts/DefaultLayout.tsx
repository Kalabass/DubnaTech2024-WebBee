import Header from '@/components/ui/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
