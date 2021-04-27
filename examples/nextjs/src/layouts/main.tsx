import Link from 'next/link';

import {
  SmileOutlined,
  SettingOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';

import type {
  Route,
  MenuDataItem,
} from '@amirkarimi/antd-pro-layout-with-ssr/lib/typings';
import type { SiderMenuProps } from '@amirkarimi/antd-pro-layout-with-ssr/lib/SiderMenu/SiderMenu';

import ProLayout from '@amirkarimi/antd-pro-layout-with-ssr';

const ROUTES: Route = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      icon: <SmileOutlined />,
      routes: [
        {
          path: '/welcome',
          name: 'Account Settings',
          icon: <SettingOutlined />,
        },
      ],
    },
    {
      path: '/example',
      name: 'Example Page',
      icon: <PlaySquareOutlined />,
    },
  ],
};

const menuHeaderRender = (
  logoDom: React.ReactNode,
  titleDom: React.ReactNode,
  props: SiderMenuProps,
) => (
  <Link href="/">
    <a>
      {logoDom}
      {!props?.collapsed && titleDom}
    </a>
  </Link>
);

const menuItemRender = (options: MenuDataItem, element: React.ReactNode) => (
  <Link href={options.path}>
    <a>{element}</a>
  </Link>
);

export default function Main({ children }) {
  return (
    <ProLayout
      style={{ minHeight: '100vh' }}
      route={ROUTES}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
    >
      {children}
    </ProLayout>
  );
}
