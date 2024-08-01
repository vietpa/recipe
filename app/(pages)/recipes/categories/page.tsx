import React from "react";
import { Grid, Box } from '@mui/material';
import styles from "./categories.module.css";
import Image from 'next/image';
import Breadcrumbs from "@/app/components/breadcrumbs";
import CookingTime from "@/app/components/cookingtime";
import Footer from "@/app/components/footer";

const Page = () => {
  return (
    <div className="categories">
      <Grid container spacing={6}>
        <Grid item xs>
          <Breadcrumbs breadcrumbs={[
            { label: 'recipes' },
            { label: 'bread' },
            { label: 'quick bread' }
          ]} />
          <h1 className={styles.categories__heading}>Whole-Grain Banana Bread</h1>
          <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
            <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
              <Image
                src='/bread-mobile.png'
                width={276}
                height={183}
                className='block md:hidden'
                alt='Screenshots of bread mobile version'
              />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
              <Image
                src='/bread.png'
                width={600}
                height={400}
                className='hidden md:block'
                alt='Screenshots of bread desktop version'
              />
            </Box>
          </Box>
          <p>This one-bowl banana bread &mdash; our <span className={styles.underline}>2018 Recipe of the Year</span> &mdash; uses the simplest ingredients, but is incredibly moist and flavorful. Whilte the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious &mdash; it's versatile.</p>
          <CookingTime data={{ prep: '10 mins', bake: '1 hr to 1 hr 15 mins', total: '1 hr 10 mins' }} />
          <hr />
          <Footer />
        </Grid>
        <Box component={Grid} item xs sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
            <Image
              src='/bread.png'
              width={600}
              height={400}
              className='hidden md:block'
              alt='Screenshots of bread desktop version'
            />
          </Box>
        </Box>
      </Grid>
    </div>
  )
}

export default Page;