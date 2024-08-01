import React from "react";
import { Grid, Box } from '@mui/material';
import styles from "./collections.module.css";
import Image from 'next/image';
import Breadcrumbs from "@/app/components/breadcrumbs";
import CookingTime from "@/app/components/cookingtime";
import Footer from "@/app/components/footer";
import { fetchRecipe, fetchCookingData } from "@/app/lib/data";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [recipe, cookingData] = await Promise.all([fetchRecipe(id), fetchCookingData(id)]);

  return (
    <div className="collections">
      <Grid container spacing={6}>
        <Grid item xs>
          <Breadcrumbs breadcrumbs={[
            { label: 'recipes' },
            { label: 'bread' },
            { label: 'quick bread' }
          ]} />
          <h1 className={styles.collections__heading}>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <CookingTime data={cookingData} />
          <hr />
          <Footer />
        </Grid>
        <Grid item xs>
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Page;