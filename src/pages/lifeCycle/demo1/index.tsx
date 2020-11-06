import React from 'react';
import { Button, message } from 'antd';
import { useToggle, useMount } from '@umijs/hooks';
const MyComponent = () => {
  useMount(
    () => {
      message.info('mount');
    }
  );
  return (<div>Hello World</div>)
}
export default () => {

  useMount(
    () => {
      message.info('213');
    }
  );

  const { state, toggle } = useToggle(false);
  return (<>
    <Button onClick={() => toggle()}>{state ? 'unmount' : 'mount'}</Button>
    {state && <MyComponent />}
  </>);
};
