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
    {
      name: 'state',
      path: '/state',
      routes: [
        {
          name: 'boolean',
          path: '/state/demo1',
          component: './state/demo1'
        },
        {
          name: 'counter',
          path: '/state/demo2',
          component: './state/demo2'
        },
        {
          name: 'localstorage',
          path: '/state/demo3',
          component: './state/demo3'
        },
        {
          name: 'map',
          path: '/state/demo4',
          component: './state/demo4'
        },
        {
          name: 'previous',
          path: '/state/demo5',
          component: './state/demo5'
        },
        {
          name: 'toggle',
          path: '/state/demo6',
          component: './state/demo6'
        },
      ],
    },
    {
      name: 'dom',
      path: '/dom',
      routes: [
        {
          name: 'clickAway',
          path: '/dom/demo1',
          component: './dom/demo1'
        },
        {
          name: 'eventListener',
          path: '/dom/demo2',
          component: './dom/demo2'
        },
        {
          name: 'eventTarget',
          path: '/dom/demo3',
          component: './dom/demo3'
        },
        {
          name: 'fullScreen',
          path: '/dom/demo4',
          component: './dom/demo4'
        },
        {
          name: 'hover',
          path: '/dom/demo5',
          component: './dom/demo5'
        },
        {
          name: 'keyPress',
          path: '/dom/demo6',
          component: './dom/demo6'
        },
      ],
    },
    {
      name: 'react',
      path: '/react',
      routes: [
        {
          name: 'hello',
          path: '/react/demo1',
          component: './react/demo1'
        },
      ],
    }
  ],
});
