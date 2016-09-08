// HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写
import React from 'react';
import ReactDOM from 'react-dom';

let names = ['Neilyo', 'Vurtne', 'Jason']

ReactDOM.render(
  <div>
  {
    names.map(name => {
      return <h1 key={name}>Hello {name}</h1>
    })
  }
  </div>,
  document.getElementById('app')
);
