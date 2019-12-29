# vue2.0工程项目架构

* [脚手架 Vue-CLI](https://cli.vuejs.org/zh/)
```
cnpm install @vue/cli -g
vue create project-name
```

## 命令行说明
```
npm install   // 依赖安装
npm run serve   // 启动开发环境
npm run build   // 项目打包
npm run lint   // 执行ESlint检测与修复
```

## 使用 SASS

* [Sass官网](https://www.sass.hk/)

```
cnpm install sass-loader -D
cnpm install node-sass -D
```
```
<style lang="scss" scoped>
  $color: red;
</style>
```

## ESLint 配置

* [ESLint官网](https://eslint.bootcss.com/)
* 在package.json中进行配置
```
"eslintConfig": {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "rules": {
    "no-console": 0
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}
```


## 组件说明

* /views/Money.vue  测试局部路由守卫
* /views/Order.vue  测试全局路由守卫
