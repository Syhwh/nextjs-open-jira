import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { UIProvider } from '../context/ui/UIProvider';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}
