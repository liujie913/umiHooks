import React, { Fragment } from 'react';
import { Input, Button } from 'antd';
import { useEventTarget } from '@umijs/hooks'

export default () => {
  const [valueProps, reset] = useEventTarget('this is initial value');

  console.log(valueProps)

  return (<Fragment>
      <Input {...valueProps} style={{ width: 200, marginRight: 20 }}/>
      <Button type="primary" onClick={reset}>重置</Button>
    </Fragment>
  );
};
