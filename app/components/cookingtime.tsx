'use client';

import React from 'react';
import { Grid, styled, SvgIcon } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Root = styled('div')(() => ({
  margin: '3rem 0',
  [`& label`]: {
    fontSize: '1.2rem',
    letterSpacing: 3,
    fontWeight: 600,
    lineHeight: 2
  }
}))

const CookingTime = () => {
  return (
    <Root>
      <Grid container spacing={2} alignItems="center">
        <Grid item fontSize={'30px'} display={'flex'} alignItems="center">
          <SvgIcon fontSize="inherit">
            <AccessTimeIcon />
          </SvgIcon>
        </Grid>
        <Grid item>
          <label>PREP</label>
          <div>10 mins</div>
        </Grid>
        <Grid item>
          <label>BAKE</label>
          <div>1 hr to 1 hr 15 mins</div>
        </Grid>
        <Grid item>
          <label>TOTAL</label>
          <div>1 hr 10 mins</div>
        </Grid>
      </Grid>
    </Root>
  )
}

export default CookingTime;