import React from 'react';
import { Button, message } from 'antd';
import { useToggle, useUnmount } from '@umijs/hooks';
const MyComponent = () => {
  useUnmount(
    () => {
      message.info('unmount');
    }
  );
  return (<div>Hello World</div>)
}
export default () => {

  const { state, toggle } = useToggle(false);
  return (<>
    <Button onClick={() => toggle()}>{state ? 'unmount' : 'mount'}</Button>
    {state && <MyComponent />}
  </>);
};
