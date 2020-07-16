<template>
	<div id="app">
		<live2d @live2dItemClick="live2dItemClick" @live2dItemEnter="live2dItemEnter" ref="aaa" :className="className"></live2d>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				className: ['fa fa-lg fa-times', 'fa fa-lg fa-info-circle']
			};
		},
		methods: {
			//index为当前选中的icon的索引
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
		}
	};
</script>

<style>
</style>
