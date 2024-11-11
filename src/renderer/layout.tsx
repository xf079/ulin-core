import { SiderBar } from '@/components/common/sider-bar.tsx';
import { SearchCommand } from '@/components/common/search-command.tsx';
import { AiChat } from '@/pages/ai-chat';

export const Layout = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <SiderBar />
      <div className='flex-1 overflow-hidden'>
        <h1 className='text-xl font-bold'>Hello, Electron!</h1>
        <AiChat />
      </div>
      <SearchCommand />
    </div>
  );
};
