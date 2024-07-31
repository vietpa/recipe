import React from 'react';
import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { red } from '@mui/material/colors';

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: `1px solid ${red[400]}`,
}));

// export const CustomizeButton = ({ text, props }: { text: string, props: any }) => {
//   return (
//     <PrimaryButton variant="outlined" {...props}>{text}</PrimaryButton>
//   )
// }