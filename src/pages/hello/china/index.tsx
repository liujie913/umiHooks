import React from 'react';
import styles from './index.less';
import { useHistory, useLocation } from "umi";

export default () => {
  const history  = useHistory();
  const location  = useLocation();

  console.log(history.location)
  console.log(location)
  return (
    <div>
      <h1 className={styles.title}>Hello China</h1>
      <button onClick={ () => {
        history.push('/')
      }}>返回</button>
    </div>
  );
}
