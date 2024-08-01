import React, { Suspense } from "react";
import Header from "@/app/components/header";
import { Container } from "@mui/material";
import Loading from "./loading";

export const experimental_ppr = true;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ width: '100%', display: 'flex' }}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </Container>
    </>
  )
}

export default Layout;