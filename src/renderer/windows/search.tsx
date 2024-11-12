import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/theme-provider.tsx';

import { Command } from '@/components/common/command.tsx';

import '@/design/index.css';

const Layout = () => {
  return <Command />;
};

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('ulin-app')!).render(<App />);
