import {
  FC,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  useState
} from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';

import { SearchIcon, HouseIcon, BotIcon, LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils.ts';
import { useTheme } from '@/theme-provider.tsx';
import { Button } from '@/components/ui/button.tsx';
import { HamburgerMenuIcon,HomeIcon,ValueNoneIcon } from '@radix-ui/react-icons';

interface IItemType {
  key: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  active?: boolean;
  title: string;
  tooltip?: ReactNode;
}

interface IItemProps extends Optional<IItemType, 'key'> {
  onClick?: () => void;
}

const Item: FC<IItemProps> = ({ icon, title, tooltip, active, onClick }) => {
  const TitleIcon = icon;

  const btnElement = (
    <div
      className={cn(
        'w-10 h-10 flex flex-col justify-center items-center gap-0.5 rounded cursor-pointer',
        active && 'bg-accent text-accent-foreground'
      )}
      onClick={onClick}
    >
      <TitleIcon className={cn('w-5 h-5 transition-all')} />
      {/*<span className={cn('text-[10px] font-semibold transition-all')}>*/}
      {/*  {title}*/}
      {/*</span>*/}
    </div>
  );

  if (!tooltip) return btnElement;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{btnElement}</TooltipTrigger>
      <TooltipContent side='right' align='start'>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};

const menuList: Array<IItemType> = [
  {
    key: 'search',
    icon: SearchIcon,
    title: '搜索',
    tooltip: (
      <div>
        <p>搜索并快速跳转</p>
        <p className='text-[10px] text-primary-foreground/60'>⌘+K</p>
      </div>
    )
  },
  {
    key: 'ai',
    icon: BotIcon,
    title: 'AI',
    tooltip: (
      <p>
        你用 AI 知识库和您工作空间中的资源，
        <br />
        轻松获取所需答案
      </p>
    )
  },
  {
    key: 'home',
    icon: HomeIcon,
    title: '首页',
    tooltip: (
      <div>
        <p>查看最近访问的页面及更多内容</p>
        <p className='text-[10px] text-primary-foreground/60'>⌘+H</p>
      </div>
    )
  }
];

export const SiderBar = () => {
  const [activeKey, setActiveKey] = useState('search');

  const { setTheme } = useTheme();

  const onHandlerItem = (item: IItemType) => {
    setActiveKey(item.key);
  };

  return (
    <div className='w-12 h-dvh bg-foreground/5 text-sidebar-foreground flex flex-col items-center justify-between drag'>
      <TooltipProvider delayDuration={120}>
        <div className='w-full flex flex-col justify-center items-center gap-2 py-7 no-drag'>
          {menuList.map((item) => (
            <Item
              icon={item.icon}
              title={item.title}
              tooltip={item.tooltip}
              key={item.key}
              active={item.key === activeKey}
              onClick={() => onHandlerItem(item)}
            />
          ))}
        </div>
      </TooltipProvider>
      <div className='no-drag w-full flex flex-col justify-center items-center gap-2 '>
        <Button size='icon' variant='ghost' className='w-8 h-8'>
          <HamburgerMenuIcon className='w-6 h-6' />
        </Button>
        <span
          onClick={() => {
            setTheme('light');
          }}
        >
          light
        </span>
        <span
          onClick={() => {
            setTheme('dark');
          }}
        >
          dark
        </span>
      </div>
    </div>
  );
};
