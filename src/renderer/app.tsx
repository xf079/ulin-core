import { ThemeProvider } from '@/theme-provider.tsx';
import { Layout } from '@/layout.tsx';

export const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};
