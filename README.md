# live2dtest

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

### Customize configuration
### 代码方法
```
showMessage(text,timeout,priority)
角色说话内容弹框
第一个参数:角色说话的内容 string
第二个参数:弹框持续时间 number
第三个参数:说话内容的权重 权重高的内容会覆盖权重低的
权重低的内容不会覆盖权重高的

loadRandModel()
角色换肤 注意：有些角色只有一个皮肤

loadloadOtherModel()
更换角色

<live2d @live2dItemClick="live2dItemClick" @live2dItemEnter="live2dItemEnter" ref="aaa" :className="className"></live2d>
用法
live2dItemClick 点击icon时触发事件 
接受一个参数index 当前点击的按钮所在的索引值
live2dItemClick(index) {
			//第一个icon被点击时触发
			if (index === 0) {
				this.$refs.aaa.loadOtherModel();
			}
			if(index === 1){
				this.$refs.aaa.loadRandModel();
			}
		},
		live2dItemClick 鼠标进入icon时出发事件
		接受一个参数index 当前点击的按钮所在的索引值
		live2dItemEnter(index) {
			this.$refs.aaa.showMessage('我是live2d', 2000, 1000);
		}
		clasName:Array 接受数组 数组为icon 的类名
		别忘记载入icon的包 或 cdn
		以font-awesome为例子
		className: ['fa fa-lg fa-times', 'fa fa-lg fa-info-circle']
		
		
```

