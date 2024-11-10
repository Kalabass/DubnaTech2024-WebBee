import { FullHeightContainer } from '@/components/ui/common/FullHeightContainer';
import { BackgroundBox } from '@/components/ui/common/StyledBacgroundBox';
import { StyledPaper } from '@/components/ui/common/StyledPaper';
import { Typography } from '@mui/material';
import { FC } from 'react';

const AdminPage: FC = () => {
  return (
    <BackgroundBox>
      <FullHeightContainer>
        <StyledPaper>
          <Typography variant='h1'>Привет, Админ</Typography>
        </StyledPaper>
      </FullHeightContainer>
    </BackgroundBox>
  );
};

export default AdminPage;
