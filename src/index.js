import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app'
/**
 * 第一个元素
 * 第二个元素 document.getElementById 获取要插入标签的容器
 */
// const ele = <h1>Hello React</h1>
// function tick() {
//   const ele = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(ele,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000)

ReactDOM.render(<App />,
  document.getElementById('root')
);
