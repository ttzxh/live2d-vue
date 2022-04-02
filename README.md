# 使用方法
```JavaScript
	npm i ttzxh-vue-live2d
	
	import Vue from 'vue'
	import App from './App.vue'
	
	import live2d from 'ttzxh-vue-live2d'
	import live2dcss from '../node_modules/ttzxh-vue-live2d/dist/ttzxh-vue-live2d.css'
	
	Vue.use(live2d)
```


0.2.0更新
##### 添加新的属性来控制live2d

本次更新主要因为人物不能移动和大小控制而作配置。其实本质上就是对position的几个属性做配置

</br>

# 属性

| 属性名                  | 参数说明                       |
| ---------------------- | ------------------------------ |
| ModelWidth             | 模型的宽度 String (如20px)       | 
| ModelHeight             | 模型的高度 String (如20px)       |
| TipWidth               | 顶部提示语宽度 String (如20px)       |
| TipHeight             | 顶部提示语高度 String (如20px)       |
| positionLeft            | 模型的距离左侧的距离 String （就是模型的left）       |
| positionRight            | 模型的距离右侧的距离 String （就是模型的right）     |
| positionTop           | 模型的距离顶部的距离 String （就是模型的top）      |
| positionBottom          | 模型的距离底部的距离 String （就是模型的bottom）       |
| toolLeft         | icon距离底部的距离 String        |
| toolRight          | icon的距离底部的距离 String       |
| toolTop          | icon距离底部的距离 String        |
| toolBottom          | icon距离底部的距离 String        |

------------------------------------------------------------------------------

# 方法

| 方法                              | 参数                  | 参数说明                   |                             |                                                              | 方法说明                            |
| --------------------------------- | --------------------- | -------------------------- | --------------------------- | ------------------------------------------------------------ | :---------------------------------- |
| showMessage(text,timeout,priority) | text,timeout,priority | text 角色说话的内容 string | timeout 弹框持续时间 number | priority 说话内容的权重 权重高的内容会覆盖权重低的<br/>权重低的内容不会覆盖权重高的 | 角色说话内容弹框                    |
| loadRandModel                     | 无                    |                            |                             |                                                              | 角色换肤 注意：有些角色只有一个皮肤 |
| loadloadOtherModel                | 无                    |                            |                             |                                                              | loadloadOtherModel()<br/>更换角色   |

# 事件

| 事件名                 | 参数  | 参数说明                       | 事件说明               | 注意         |
| ---------------------- | ----- | ------------------------------ | ---------------------- | ------------ |
| live2dItemClick(index) | index | index为当前icon的索引 从0 开始 | 点击当前icon时触发     | 别忘了加icon |
| live2dItemEnter(index) | index | index为当前icon的索引 从0 开始 | 鼠标进入当前icon时触发 |              |

# 放icon的地方

```JavaScript
	:clasName  Array 这是一个数组 数组里面存放icon
```



# 举个例子

```javascript
<live2d @live2dItemClick="live2dItemClick" @live2dItemEnter="live2dItemEnter" ref="aaa" :className="className"></live2d>

live2dItemClick(index) {
			//第一个icon被点击时触发
			if (index === 0) {
				this.$refs.aaa.loadOtherModel();
			}
			if(index === 1){
				this.$refs.aaa.loadRandModel();
			}
		},
	
		live2dItemEnter(index) {
			this.$refs.aaa.showMessage('我是live2d', 2000, 1000);
		}

		className
		以font-awesome为例子
		className: ['fa fa-lg fa-times', 'fa fa-lg fa-info-circle']
		
```

# github
[源码](https://github.com/ttzxh/live2d-vue)

# keywords
live2d