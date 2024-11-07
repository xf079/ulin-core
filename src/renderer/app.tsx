import { Button } from '@/components/ui/button.tsx';
import { SiderBar } from '@/components/common/sider-bar.tsx';
import { ThemeProvider } from '@/theme-provider.tsx';
import { SearchCommand } from '@/components/common/search-command.tsx';

export const App = () => {
  return (
    <ThemeProvider>
      <div className='w-full h-full'>
        <SiderBar />
        <h1 className='text-xl font-bold'>Hello, Electron!</h1>
        <Button variant="default">Click me</Button>
        <SearchCommand />
      </div>
    </ThemeProvider>
  );
}
