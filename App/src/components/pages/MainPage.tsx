import { FC } from 'react';
import { ROUTES } from '../const/routes';

const MainPage: FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>MainPage</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          color: 'blue',
        }}
      >
        <a href={ROUTES.PROFILE}>profile</a>

        <a href={ROUTES.ADMIN}>admin</a>
      </div>
    </div>
  );
};

export default MainPage;
