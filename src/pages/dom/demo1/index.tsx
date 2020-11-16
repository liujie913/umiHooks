import React, { useState } from 'react';
import { Button } from 'antd';
import {useClickAway} from '@umijs/hooks';

export default () => {
  const [counter, setCounter] = useState(0);

  const ref = useClickAway(() => {
    setCounter(s => s + 1);
  });

  return (
    <div>
      <span ref={ref}>
        <Button type="primary" onClick={() => {alert("点击外面")}}>box1</Button>
      </span>
      <p>counter: {counter}</p>
    </div>
  );
};
