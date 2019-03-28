const moduleA = {
     state: { count: 0 },
     mutations: {
       increment (state) {
         // 这里的 `state` 对象是模块的局部状态
         state.count++
       }
     },
  
     getters: {
       doubleCount (state) {
         return state.count * 2
       }
     }
    }
export default moduleA