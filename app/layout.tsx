import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from '@/app/theme';
import Header from "@/app/components/header";
import "./globals.css";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mui-fixed`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main className={styles.main}>
              <Header />
              <Container maxWidth="lg" sx={{ width: '100%', display: 'flex' }}>{children}</Container>
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
