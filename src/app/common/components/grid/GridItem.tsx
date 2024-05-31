import { Unstable_Grid2 as MuiGrid } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

export const GridItem = () => <MuiGrid xs={4}></MuiGrid>;
