import React from 'react';
import styles from './index.less';
import { Link, NavLink, Prompt } from 'umi';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page home</h1>
      <Link
        to={{
          pathname: "/hello/china",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true },
        }}
      >
      <Button>中国</Button></Link>
      <NavLink to="/hello/japan?name=zhangsan">
        <button>日本</button>
      </NavLink>

      <Prompt message="你确定要离开么？" />

    </div>
  );
}
