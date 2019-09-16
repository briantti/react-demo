##说明


### package.json 

此[Create React App](https://github.com/facebook/create-react-app)版本为3.0.1，3.0以上的版本，

`npm run eject`
之后没有区分webpack.config.dev.js 和 webpack.config.prod.js，只有一个webpack.config.js，

babel版本为7.4.3

所用装饰器为@babel/plugin-proposal-class-properties, @babel/plugin-proposal-decorators，

babel配置为：（用旧方式安装会报错）
```$xslt
"babel": {
    ...
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
```
npm install 安装所有依赖时报'/babel-preset-react-app/node_modules/@babel/runtime/helpers/slicedToArray'，

```
npm install @babel/runtim
```

解决报错

### src/index.js
要加`<Provider/>`，再把全局公用的store引入，如引入import appStore  from './store/appStore'
```
<Provider appStore={appStore}>
     <App/>
</Provider>
```

### appStore.js

```
class AppStore{}//创建一个类。
export default new AppStore()//必须new一个实例，不然就要static
```
类相当于实例的原型， 所有在类中定义的方法， 都会被实例继承。 如果在一个方法前， 加上static关键字， 就表示该方法不会被实例继承， 而是直接通过类来调用， 这就称为“ 静态方法”。
详情见[es6 javascript的class的静态方法、属性和实例属性](https://blog.csdn.net/qq_30100043/article/details/53542966)

### mobx
```
export default @inject('appStore') @observer class Login extends Component {}
```
观察模式和注入store写法更新

### 其他
- [bodymovin](https://github.com/bigxixi/bodymovin_cn)
把在AE上做好的动画导出为json文件，然后以Android/iOS原生动画的形式在移动设备上渲染播放(如本项目的loading页)

- [gsap](https://greensock.com/docs/NPMUsage)
用于创建适用于所有主流浏览器的高性能动画。（如登录页面的hover粒子）