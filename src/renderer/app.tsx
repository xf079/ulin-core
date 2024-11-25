import { ThemeProvider } from '@/theme-provider.tsx';
import { Layout } from '@/layout.tsx';
import { ConfigProvider,App as AntdApp } from 'antd';

export const App = () => {
  return (
    <ThemeProvider>
      <ConfigProvider theme={{ cssVar: true, hashed: false }} prefixCls='u' wave={{disabled:true}}>
        <AntdApp>
          <Layout />
        </AntdApp>
      </ConfigProvider>
    </ThemeProvider>
  );
};
