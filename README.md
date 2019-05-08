# vue-cms

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 初始
```
|--app 项目根目录
    |--__tests__ 单元测试目录
    |--android 原生Android工程目录
    |--app react-native开发目录
        |--common 
        |--components 视图组件目录
        |--images 图片目录
        |--pages 业务组件目录
        |--stores 状态存放目录
        |--utils 工具类目录
        |--app.js 项目入口文件
    |--ios IOS原生工程目录

```
    


# 使用git注意：
1. 不要在master(发布生产环境)、develop(发布预生产环境)这两个分支进行开发提交代码。
2. 有新需求，要新建分支开发，开发没问题时，再合并到deveop，deveop没问题时，再合并到master准备发生产。在开发新特性的时，遇到的bug直接在该特性分支上修复，不需要再迁移出新分支。
3. 在生产环境发现bug，由master分支迁移一个新的分支出来改bug，改完测试没问题，把该分支合并到develop，然后该分支可以删除，等当前develop测试没问题，再一起合并到master发布到生产。
4. 在预生产环境发现的bug，由develop分支迁移一个新分支修改bug，修改测试通过后，再合并到develop分支，然后该分支可以删除
5. 新建特性开发分支命令规范以版本号为准，版本号分三位，如1.0.0, 第一位主版本，代表版本大升级，一般不不兼容以下版本，第二位表示新特性新功能开发，第三位表示修复bug
