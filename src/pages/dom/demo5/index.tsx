import React from 'react';
import { useHover } from '@umijs/hooks';

export default () => {
  const [isHovering, ref] = useHover<HTMLDivElement>();
  return <div ref={ref} style={{height: 300, backgroundColor: 'red'}}>{isHovering ? 'hover' : 'leaveHover'}</div>;
};
