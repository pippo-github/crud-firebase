import Vue from 'vue'
import App from './App'
 
// let Bus = new Vue()




// export default  Bus 
export const Bus = new Vue()






new Vue({
  el: '#crudApp',
  render: h => h(App)
})


