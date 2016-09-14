web1.0-> html css 访问url 动态生成静态界面 刷新 操作->刷新->刷新；
 缺点：。。。无处安防的ui临时状态； 优点。。。单向流
web2.0-> ajax SPA 前端工作量 javascript变多 更多局部刷新交互
 自己对dom操作（复杂的话。。。需要同时对用户操作和服务器反馈做出响应，并确保页面状态和服务器状态的一致性）

后端 mvc C-交互通过http M V
  1. 系统只有一个输入源，由Controller分发
  2. 系统只有一个唯一 完整状态（数据库）

前端mv* M-后台数据 V-html/css C-交互通过事件handler
  1.输入源不确定，可以在V中直接去修改model，导致没发统一管理
  2.没有完整的状态，除了后端数据的映射，还包括视图本身的状态，url地址等
  3.阻碍了Model和View的组件化拆分（只有Model和View个数较少的时候，依赖关系才比较清晰）

flux/redux思想更接近后端mvc

store //rootReducer(combineReducers(reducers))参数传入生成
  state = store.getState
  dispatch(action) action（动作）实质上是包含 type 属性的普通对象
  subscribe(listener)
reducer (previousState, action) => newState 根据 action.type 来更新 state 并返回 nextState 的函数
