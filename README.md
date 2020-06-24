# webapp-shop
created by xhf at 2020-6-16

## webapp项目周

前端工程师的日常工作：
	项目工程架构
	业务开发：UI还原、组件设计、业务逻辑实现
	项目上线

#### 一、Vue项目创建

1、安装node.js环境（node -v 验证）
	A -> B C -> D -> E 依赖的层级关系

2、安装vue脚手架（@vue/cli)
	脚手架是一个第三方库，需先安装才能使用
	-g 表示全局安装 global

3、使用脚手架来创建项目
	warn warning 警告,可不处理
	error 红色报错,是失败，一定要处理

4、vue.config.js 配置文件
	让我们的vue项目更加灵活、满足个性化的开发需求

5、npm的使用（用于安装第三方模块）
	(c)npm install xxx -S  把包记录在dependencies这里
	(c)npm install yyy -D  把包记录在devDependencies这里
	(c)npm install 会根据根目录中的package.json文件中记录的第三方包来进行安装。
	(c)npm install zzz -g  全局安装永久可用

6、cnpm的使用
	```
	# 把国外的服务器，切换至淘宝镜像源。
	# 使用cnpm安装第三方模块，网速会更快。
	npm install -g cnpm --registry=https://registry.npm.taobao.org
	```
7、ESLint
	作用：用于规范代码风格
	如果你的代码不满足规范，就会出现警告或报错。

8、devtools安装
	git clone https://github.com/arcliang/Vue-Devtools-.git
	打开谷歌浏览器：设置-扩展程序-加载已解压的扩展包
	重启一下浏览器

9、webpack
	本地服务器，指向 public 目录
	热更新：webpack实时监测代码的变化，并实时编译，页面自动更新
	当npm start启动了本地服务后，webpack就会动态地把入口文件main.js编译压缩插入到index.html文件中去。


#### 二、路由vue-router

1、单页面应用程序（SPA）
	一切皆组件
	vue-router让SPA开发更简单

2、路由(vue-router)安装与基础使用
	 安装 `cnpm install vue-router -S`
	 在src/router.js文件，注册路由、创建路由实例并抛出
	 在入口文件main.js中引入路由实例并挂载
	 在App.js组件中，使用内置组件<router-view></router-view>容器来放置匹配成功的组件
	 使用<router-link></router-link>实现页面的跳转

3、搞清楚路由的三个问题
	 	1）安装与配置：设计路径和组件匹配关系（一一对应关系）
	 	2）和路径url匹配成功的组件，放在哪里进行展示？（router-view容器）
	 	3）如何改变url？（router-link声明式路由，编程式路由）

4、路由的基础知识
 	1）命名视图：给router-view组件命名，只有名字匹配了组件才能显示在视图中。
	2）路由别名：给路由匹配关系取个小名，使用alias属性。
	3）命名路由：给路由匹配关系取个名字，使用name属性。
	4）重定向：从一个路径自动跳转到另一个路径，使用redirect属性。
	5）两种路由模式：History模式 vs. Hash模式，前者部署至服务器会报404.
	6）编程式导航：this.$router.push() / replace()。
	7）通配符：在定义一一对应的路由匹配关系时，path中可以使用 * 来匹配任意字符。
	8）动态路由：`{path:'/detail/:id', component: Detail}`，在Detail组件中可以使用`this.$route.params.id`来接收参数。
	9）路由传参：`{path:'/detail/:id', component: Detail, props:true}`props选项来接收参数。
	10）嵌套路由：<router-view>组件可以进行多级嵌套，譬如`/find/good`这样的多级路由。
	11）路由懒加载：一种性能优化方案，让组件可以在路由匹配成功时按需加载。
	12）路由守卫：对路由匹配行为进行拦截，全局守卫使用`router.beforeEach()`，局部守卫使用`beforeRouteEnter()`，常常用于实现登录权限拦截功能。
	13）watch侦听器，还可以监听 $route的变化。


#### 三、状态管理vuex

1、初识Vuex

	状态：即数据、视图。
	状态管理的本质，就是对应用程序的数据进行科学地流程化管理，目标是让数据变化可预期、可控。
	Flux一种数据管理架构方案，这是一种数据管理的思想，最早诞生于React团队。
	React技术栈中，最出名的状态管理工具是 Redux和Mobx。
	Vue技术栈中，最出名的状态管理工具是Vuex。
	Vuex只是一种数据管理方案，并不是Vue开发必须的。换句话说，在架构Vue项目时可以不使用Vuex。
	虽然可以不使用Vuex，但不得不说Vuex非常强大，所以还是建议尽量用上它。
	Vuex常用于实现组件之间的数据交互、程序数据缓存等需求。
	Vuex配合devtools，可以非常方便地调试应用程序中的数据bug。

2、安装

	cnpm install vuex -S
	在src目录中新建一个名为store.js的文件
	引入vue、vuex，并注册Vue.use(Vuex)
	创建Vuex.Store实例，使用到四个重要选项：state、getters、mutations、actions，并抛出该实例
	在main.js中引入并挂载。
	如何验证安装成功呢？在任何中访问this.$store。

3、Vuex基础知识点

	1）五个核心概念
		state：用于定义共享数据
		getters：相当于是计算属性
		mutations：这是vuex官方建议的用于直接地同步地修改state
		actions：这是vuex与后端接口交互的唯一入口，用于间接地异步地修改state
		modules：用于把一个完整的根store拆分成多个子模块，以方便工作协同开发，减少工作冲突。
	2）如何触发mutations方法？
		在组件中this.$store.commit('已定义的mutation方法', '负载')
		建议使用 mapMutations('命名空间', [])进行映射，使用this.进行访问。
	3）如何触发actions方法？
		在组件中this.$store.dispatch('已定义的action方法', '负载')
		建议使用 mapActions('命名空间', [])进行映射，使用this.进行访问。
	4）如何把根store拆分成多个子module？
		定义子module时，一定要记得加上 namespaced:true 以开启命名空间
		在 new Vuex.Store({modules: {}}) 中使用modules选项，对多个子module进行组装。
	5）四个 mapXXX 的使用
		mapState 和 mapGetters 只能在computed计算中进行使用。
		mapMutations 和 mapActions 只能methods选项中进行使用。
		映射进来的变量和方法，可以使用 this.进行访问，更方便。

#### 四、axios

1、axios有什么优势？

	它是基于Promise封装的，用起来非常方便，解决了回调地狱的问题。
	它在客户端、node.js服务器都可以进行使用。

2、安装与使用入门

	cnpm install axios -S
	封装axios：axios.create() 创建axios实例，指定基准URL等字符。
		封装请求拦截器：axios.interceptors.request.use() 在请求发出之前进行拦截。
		封装响应拦截器：axios.interceptors.response.use() 在客户端收到响应之前进行拦截。
	axios封装完成后，在代码中就可以调后端接口了。
		axios({url: '', method: 'GET', params: '入参'}).then()
		axios({url: '', method: 'POST', data: '入参'}).then()

3、axios+vuex走通Vuex全流程（步骤说明）

	在actions中封装方法，使用axios调取后端接口，成功后把数据mutation到state中去。
	在组件中使用mapActions映射actions方法，在mounted中触发接口调用。
	在组件中使用mapState映射state数据，就可以在视图中进行各种渲染了。
	注意：如果调接口时产生跨域问题，要在vue.config.js中配置代理并重启项目，进而解决跨域问题。特别注意baseUrl的切换，搞清楚哪个才是你需要访问的服务器地址。


#### 五、UI设计

	1、安装

	cnpm install vant -S
	cnpm install babel-plugin-import -D
	配置babel.config.js文件并重启项目

	2、使用

	import { Button } from 'vant'
	components: { [Button.name]: Button }
	<van-button size='small' type="primary">主要按钮</van-button>

	3、rem配置

	index.html引入rem.js
	vscode中安装 px-to-rem 插件
	并设置该插件的转化尺寸为 75
	在写样式时，按 alt+Z 把px转化为rem

	4、sass

	cnpm install sass-loader -D
	cnpm install node-sass -D
	编写全局的 common.scss 样式文件
	<style lang="scss" scoped>
		@import './assets/common.scss';
		@import '@/assets/common.scss';
	</style>

------------------------------------------------------------------------------------

#### 打包

开发环境 -> 测试环境 ？
开发环境 -> 生产环境 ？


1、启动时可用选项

--open 自动打开浏览器
--port 8899

2、图片使用

```
<img src="/1.png" alt="图片">
<img src="../assets/logo.png" alt="">
<div class="img1"></div>
<div class="img2"></div>

img {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.img1 {
  width: 100px;
  height: 100px;
  background: url('/1.png') no-repeat 0 0 / 100px 100px;
}
.img2 {
  width: 100px;
  height: 100px;
  background: url('../assets/logo.png') no-repeat 0 0 / 100px 100px;
}
```

3、publicPath

/
/qf/
./
https://www.qiniu.com/qf/web/


4、hash缓存原理

浏览器缓存原理
filenameHashing: false 关闭hash缓存

5、多页面配置

不是每个应用都需要是一个单页应用。Vue CLI 支持使用 vue.config.js 中的 pages 选项构建一个多页面的应用。构建好的应用将会在不同的入口之间高效共享通用的 chunk 以获得最佳的加载性能。

```
pages: {
	index: {
		// page 的入口
		entry: 'src/main.js',
		// 模板来源
		template: 'public/index.html',
		// 在 dist/index.html 的输出
		filename: 'index.html',
		// 当使用 title 选项时，
		// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
		title: '首页',
		// 在这个页面中包含的块，默认情况下会包含
		// 提取出来的通用 chunk 和 vendor chunk。
		chunks: ['chunk-vendors', 'chunk-common', 'index']
	},
	// 当使用只有入口的字符串格式时，
	// 模板会被推导为 `public/subpage.html`
	// 并且如果找不到的话，就回退到 `public/index.html`。
	// 输出文件名会被推导为 `subpage.html`。
	about : {
		entry: 'src/main.js',
		title: '关于我们',
		chunks: ['chunk-vendors', 'chunk-common', 'index']
	}
}
```

6、项目部署

域名购买与备案、DNS解析服务
云服务器购买、虚拟主机
nginx安装与使用、History模式重定向处理
数据库安装与使用
