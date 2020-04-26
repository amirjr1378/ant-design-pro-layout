import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import defaultProps from './defaultProps';

export default () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Button
        onClick={() => setIndex(index + 1)}
        style={{
          margin: 8,
        }}
      >
        +1
      </Button>
      <ProLayout
        location={{
          pathname: '/welcome',
        }}
        menuItemRender={(item, dom) => (
          <div>
            {index} {dom}
          </div>
        )}
        subMenuItemRender={(_, dom) => (
          <div>
            {index} {dom}
          </div>
        )}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
            onClick={() => {
              window.open('https://remaxjs.org/');
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...defaultProps}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </>
  );
};
