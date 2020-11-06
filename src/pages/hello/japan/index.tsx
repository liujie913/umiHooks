import React from 'react';
import { useToggle } from '@umijs/hooks';

export default () => {
  const { state, toggle } = useToggle();
  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
}
