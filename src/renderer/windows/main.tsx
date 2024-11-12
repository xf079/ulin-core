import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/theme-provider.tsx';

import { SiderBar } from '@/components/common/sider-bar.tsx';
import { AiChat } from '@/pages/ai-chat';
import { Command } from '@/components/common/command.tsx';

import '@/design/index.css';

const Layout = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <SiderBar />
      <div className='flex-1 overflow-hidden'>
        <AiChat />
      </div>
      <Command />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('ulin-app')!).render(<App />);
