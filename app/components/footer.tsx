'use client';

import React from 'react';
import { Grid, styled, SvgIcon, Button } from '@mui/material';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import { PrimaryButton } from '@/app/components/buttons';

const Root = styled('div')(() => ({
  margin: '3rem 0',
  [`& label`]: {
    fontSize: '1.2rem',
    letterSpacing: 3,
    fontWeight: 600,
    lineHeight: 2
  }
}))

const Footer = () => {

  return (
    <Root>
      <Root>
        <Grid container spacing={2} alignItems="center">
          <Grid item fontSize={'30px'} display={'flex'} alignItems="center">
            <SvgIcon fontSize="inherit">
              <SettingsInputSvideoIcon />
            </SvgIcon>
          </Grid>
          <Grid item>
            <label>YIELD</label>
            <div>1 loaf, 12 generous servings</div>
          </Grid>
          <Grid item>
            <PrimaryButton variant="outlined">OK</PrimaryButton>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </Root>
    </Root>
  )
}

export default Footer;