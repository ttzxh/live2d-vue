
import live2d from './live2d.vue'
import live2dItem from './live2d-item.vue'

const components=[live2d,live2dItem]

const install = function(Vue){
	components.forEach((item)=>{
		Vue.component(item.name,item)
	})
}
export default{
	install
}