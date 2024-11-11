import { Button } from '@/components/ui/button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Link2Icon, ChevronDownIcon } from '@radix-ui/react-icons';

import IconScreenShot from '@/assets/icons/icon-screenshot.svg?react';
import IconOpenai from '@/assets/icons/icon-openai.svg?react';
import IconControl from '@/assets/icons/icon-control.svg?react';
import IconChatHistory from '@/assets/icons/icon-chat-history.svg?react';
import IconChatAdd from '@/assets/icons/icon-chat-add.svg?react';

export const AiChat = () => {
  return (
    <div className='relative flex flex-col h-full w-full text-sm'>
      <div className='flex flex-col w-full h-full'>
        <div className='relative w-full max-w-[720px] mx-auto'>
          <div className='w-full h-full'>
            <h1>Hi, ChatGPT</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-start items-center'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='secondary' className='px-1.5 py-1 h-7 mr-2'>
                      <IconOpenai />
                      <span className='text-xs font-semibold'>GPT-4o mini</span>
                      <ChevronDownIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56'>
                    <DropdownMenuLabel className='text-[10px] text-muted-foreground'>
                      基础
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem className='text-xs font-medium'>
                        GPT-4o mini
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        Claude 3 Haiku
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        Claude 3.5 Haiku
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        Gemini 1.5 Flash
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        L1ama 3.1 80B
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuLabel className='text-[10px] text-muted-foreground'>
                      高级
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem className='text-xs font-medium'>
                        GPT-4o
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        Claude 3.5 Sonnet
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        Gemini 1.5 Pro
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-xs font-medium'>
                        L1ama 3.1 405B
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size='icon' variant='ghost' className='w-8 h-8'>
                  <IconScreenShot className='w-6 h-6' />
                </Button>
                <Button size='icon' variant='ghost' className='w-8 h-8'>
                  <Link2Icon className='w-6 h-6' />
                </Button>
              </div>
              <div className='flex justify-end items-center'>
                <Button size='icon' variant='ghost' className='w-8 h-8'>
                  <IconControl className='w-6 h-6' />
                </Button>
                <Button size='icon' variant='ghost' className='w-8 h-8'>
                  <IconChatHistory className='w-6 h-6' />
                </Button>
                <Button size='icon' variant='secondary' className='w-8 h-8 '>
                  <IconChatAdd className='w-6 h-6' />
                </Button>
              </div>
            </div>
            <div className="flex flex-col border rounded-xl px-1.5 py-1">
              <div className="123">sdf</div>
              <textarea className="flex-1 bg-transparent outline-none resize-none"
                        placeholder='输入消息、输入 @选择模型、 /选择技能' />
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                  <Button size='icon' variant='ghost' className='w-8 h-8'>
                    <IconScreenShot className='w-6 h-6' />
                  </Button>
                  <Button size='icon' variant='ghost' className='w-8 h-8'>
                    <Link2Icon className='w-6 h-6' />
                  </Button>
                </div>
                <div className='flex justify-end items-center'>
                  <Button size='icon' variant='ghost' className='w-8 h-8'>
                    <IconControl className='w-6 h-6' />
                  </Button>
                  <Button size='icon' variant='ghost' className='w-8 h-8'>
                    <IconChatHistory className='w-6 h-6' />
                  </Button>
                  <Button size='icon' variant='secondary' className='w-8 h-8 '>
                    <IconChatAdd className='w-6 h-6' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
