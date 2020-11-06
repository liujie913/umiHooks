import { useRequest } from '@umijs/hooks';
import React from 'react';
export default () => {
  const { data, error, loading } = useRequest('https://helloacm.com/api/random/?n=8&x=4')
  if (error) {
    return <div>failed to load</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return <div>Number: {data}</div>
}
