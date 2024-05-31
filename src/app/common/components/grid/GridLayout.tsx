import { Grid as MuiGrid } from '@mui/material';

type Props = {
  children?: React.ReactNode;
  gap: string;
};

export const GridLayout = ({ children, gap }: Props) => (
  <MuiGrid container style={{ gap }}>
    {children}
  </MuiGrid>
);
