import { useRequest } from '@umijs/hooks';
import { Button, message } from 'antd';
import React from 'react';

export function deleteUser(userId: string): Promise<{ success: boolean }> {
  console.log(userId);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default () => {
  const { run, fetches } = useRequest(deleteUser, {
    manual: true,
    fetchKey: id => id,
    onSuccess: (result, params) => {
      if (result.success) {
        message.success(`Disabled user ${params[0]}`);
      }
    }
  });

  const users = [{ id: '1', username: 'A' }, { id: '2', username: 'B' }, { id: '3', username: 'C' }];

  return (
    <div>
      <div>You can click all buttons, each request has its own status.</div>
      <ul>
        {users.map((user => (
          <li key={user.id} style={{ marginTop: 8 }}>
            <Button loading={fetches[user.id]?.loading} onClick={() => { run(user.id) }}>delete {user.username}</Button>
          </li>
        )))}
      </ul>
    </div>
  );
};
