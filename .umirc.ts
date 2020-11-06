import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      name: '首页',
      path: '/',
      component: './'
    },
    {
      name: '欢迎',
      path: '/hello',
      routes: [
        {
          name: '中国',
          path: '/hello/china',
          component: './hello/china'
        },
        {
          name: '日本',
          path: '/hello/japan',
          component: './hello/japan'
        },
      ],
    },
    {
      name: 'request',
      path: '/request',
      routes: [
        {
          name: '手动触发',
          path: '/request/demo1',
          component: './request/demo1'
        },
        {
          name: '轮询',
          path: '/request/demo2',
          component: './request/demo2'
        },
        {
          name: '并行',
          path: '/request/demo3',
          component: './request/demo3'
        },
        {
          name: '网络请求',
          path: '/request/demo4',
          component: './request/demo4'
        },
      ],
    },
    {
      name: 'useSelections',
      path: '/useSelections',
      routes: [
        {
          name: '选择框',
          path: '/useSelections/demo1',
          component: './useSelections/demo1'
        },
      ],
    },
    {
      name: 'lifeCycle',
      path: '/lifeCycle',
      routes: [
        {
          name: 'mount',
          path: '/lifeCycle/demo1',
          component: './lifeCycle/demo1'
        },
        {
          name: 'unmount',
          path: '/lifeCycle/demo2',
          component: './lifeCycle/demo2'
        },
        {
          name: 'update',
          path: '/lifeCycle/demo3',
          component: './lifeCycle/demo3'
        },
      ],
    },
  ],
});
