import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui/navbar';
import { Sidebar } from '../ui/sidebar';

interface Props {
  title?: string;
}
export const Layout: FC<PropsWithChildren<Props>> = ({ title, children }) => (
  <Box sx={{ flexFlow: 1 }}>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <Sidebar />
    <Box sx={{ padding: '10px 20px' }}>{children}</Box>
  </Box>
);
