import { Typography, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC, ReactNode } from 'react';

interface TextBlockProps {
  title: string;
  value?: string;
  adornment?: ReactNode;
}

const TextBlock: FC<TextBlockProps> = ({ title, value, adornment }) => {
  return (
    <Grid container size={12} spacing={2} paddingInline={1}>
      <TitleGrid size={{ xs: 4, md: 3 }}>
        <Typography variant='body1'>{title}</Typography>
      </TitleGrid>
      <ValueGrid size={{ xs: 8, md: 9 }}>
        <Typography component='span' variant='body1'>
          {value || 'Не указано'}
        </Typography>
        {adornment}
      </ValueGrid>
    </Grid>
  );
};

export default TextBlock;

const TitleGrid = styled(Grid)({
  textAlign: 'start',
});

const ValueGrid = styled(Grid)({
  display: 'flex',
  justifyItems: 'center',
  textAlign: 'center',
  alignItems: 'center',
  gap: 16,
});
