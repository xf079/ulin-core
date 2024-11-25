import { useState } from 'react';
import { useEvent } from '@/hooks/useEvent.ts';
import { Avatar, Button, theme, Tooltip } from 'antd';
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  HomeOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';

export const SiderBar = () => {
  const [activeKey, setActiveKey] = useState('ai');
  const { token } = theme.useToken();

  const emitter = useEvent();

  const handleSearch = () => {
    emitter.emit('search');
  };

  return (
    <div
      className='w-12 h-dvh flex flex-col items-center justify-between drag'
      style={{ backgroundColor: token.colorBgLayout }}
    >
      <div className='w-full flex flex-col justify-center items-center gap-2 pt-2 pb-7 no-drag'>
        <Avatar icon={<UserOutlined />} size={28} />
        <Tooltip
          placement='rightTop'
          title={
            <div className='text-xs'>
              <p>搜索并快速跳转</p>
              <p className='opacity-50'>⌘+K</p>
            </div>
          }
        >
          <Button
            type='text'
            icon={<SearchOutlined />}
            onClick={handleSearch}
          />
        </Tooltip>
        <Tooltip
          placement='rightTop'
          title={
            <div className='text-xs'>
              你用 AI 知识库和您工作空间中的资源，轻松获取所需答案
            </div>
          }
        >
          <Button
            type='text'
            color='default'
            variant={activeKey === 'ai' ? 'filled' : 'text'}
            icon={<MessageOutlined />}
            onClick={() => setActiveKey('ai')}
          />
        </Tooltip>
        <Tooltip
          placement='rightTop'
          title={
            <div className='text-xs'>
              <p>查看最近访问的页面及更多内容</p>
              <p className='text-white/60'>⌘+H</p>
            </div>
          }
        >
          <Button
            type='text'
            color='default'
            variant={activeKey === 'home' ? 'filled' : 'text'}
            icon={<HomeOutlined />}
            onClick={() => setActiveKey('home')}
          />
        </Tooltip>
        <span className='i-solar-home-smile-bold text-xl' />
      </div>
      <div className='no-drag w-full flex flex-col justify-center items-center gap-2 pb-2'>
        <Tooltip placement='rightTop' title='系统设置'>
          <Button
            type='text'
            color='default'
            variant='text'
            icon={<SettingOutlined />}
          />
        </Tooltip>
        <Tooltip placement='rightTop' title='模版中心'>
          <Button
            type='text'
            color='default'
            variant='text'
            icon={<AppstoreAddOutlined />}
          />
        </Tooltip>
        <Tooltip placement='rightTop' title='垃圾箱'>
          <Button
            type='text'
            color='default'
            variant='text'
            icon={<DeleteOutlined />}
          />
        </Tooltip>
        <Tooltip placement='rightTop' title='帮助中心'>
          <Button
            type='text'
            color='default'
            variant='text'
            icon={<QuestionCircleOutlined />}
          />
        </Tooltip>
      </div>
    </div>
  );
};
